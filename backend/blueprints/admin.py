import csv
import json
import re
from io import StringIO

import pyodbc
from flask import Blueprint, Response, current_app, request

from .. import db, security
from ..responses import ApiError, json_body, ok

bp = Blueprint("admin", __name__, url_prefix="/api/admin")

LESSON_COLUMNS = """
    l.LessonId AS lessonId,
    l.ModuleId AS moduleId,
    l.LessonCode AS lessonCode,
    l.LessonOrder AS lessonOrder,
    l.Title AS title,
    l.Objective AS objective,
    m.Title AS moduleTitle,
    m.BeltLevel AS beltLevel
"""

QUESTION_COLUMNS = """
    QuestionId AS questionId,
    QuizId AS quizId,
    QuestionText AS questionText,
    OptionA AS optionA,
    OptionB AS optionB,
    OptionC AS optionC,
    OptionD AS optionD,
    CorrectAnswer AS correctAnswer,
    Explanation AS explanation
"""

TEMPLATE_COLUMNS = """
    ResourceId AS resourceId,
    Title AS title,
    DMAICPhase AS dmaicPhase,
    MinBelt AS minBelt,
    Icon AS icon,
    EstimatedMinutes AS estimatedMinutes,
    Description AS description,
    FieldsJson AS fieldsJson,
    ExampleJson AS exampleJson,
    SortOrder AS sortOrder,
    IsActive AS isActive
"""

GLOSSARY_COLUMNS = """
    TermId AS termId,
    Term AS term,
    Definition AS definition,
    CreatedAt AS createdAt,
    UpdatedAt AS updatedAt
"""

DMAIC_PHASES = {
    "define": "Define",
    "measure": "Measure",
    "analyze": "Analyze",
    "improve": "Improve",
    "control": "Control",
}

ANSWER_KEYS = ("A", "B", "C", "D")

BELT_ALIASES = {
    "white": "White Belt",
    "yellow": "Yellow Belt",
    "green": "Green Belt",
    "black": "Black Belt",
    "master": "Master Black Belt",
    "master-black": "Master Black Belt",
    "masterblack": "Master Black Belt",
    "mbb": "Master Black Belt",
}


def _text(value, field, label, required=True, maximum=200):
    text = str(value if value is not None else "").strip()
    if not text:
        if required:
            raise ApiError(400, "VALIDATION_ERROR", f"{label} is required.", {"field": field})
        return None
    if len(text) > maximum:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            f"{label} must be {maximum} characters or fewer.",
            {"field": field},
        )
    return text


def _integer(value, field, label, required=True, minimum=None, maximum=None):
    if value is None or value == "":
        if required:
            raise ApiError(400, "VALIDATION_ERROR", f"{label} is required.", {"field": field})
        return None
    if isinstance(value, bool):
        raise ApiError(400, "VALIDATION_ERROR", f"{label} must be a whole number.", {"field": field})
    try:
        number = int(value)
    except (TypeError, ValueError) as exc:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            f"{label} must be a whole number.",
            {"field": field},
        ) from exc
    if isinstance(value, float) and not value.is_integer():
        raise ApiError(400, "VALIDATION_ERROR", f"{label} must be a whole number.", {"field": field})
    if minimum is not None and number < minimum:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            f"{label} must be at least {minimum}.",
            {"field": field},
        )
    if maximum is not None and number > maximum:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            f"{label} must be at most {maximum}.",
            {"field": field},
        )
    return number


def _boolean(value, field, label, default=False):
    if value is None:
        return default
    if isinstance(value, bool):
        return value
    if isinstance(value, int) and value in (0, 1):
        return bool(value)
    if isinstance(value, str):
        normalized = value.strip().lower()
        if normalized in {"true", "1", "yes", "on"}:
            return True
        if normalized in {"false", "0", "no", "off"}:
            return False
    raise ApiError(400, "VALIDATION_ERROR", f"{label} must be true or false.", {"field": field})


def _json_value(value, field, label, expected_type):
    if not isinstance(value, expected_type):
        type_name = "array" if expected_type is list else "object"
        raise ApiError(400, "VALIDATION_ERROR", f"{label} must be a JSON {type_name}.", {"field": field})
    try:
        return json.dumps(value, ensure_ascii=False, separators=(",", ":"))
    except (TypeError, ValueError) as exc:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            f"{label} contains values that cannot be stored as JSON.",
            {"field": field},
        ) from exc


def _dmaic_phase(value, default="Define"):
    normalized = str(value if value is not None else default).strip().lower()
    if normalized not in DMAIC_PHASES:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "dmaicPhase must be Define, Measure, Analyze, Improve, or Control.",
            {"field": "dmaicPhase"},
        )
    return DMAIC_PHASES[normalized]


def _correct_answer(value, default=None):
    text = str(value if value is not None else default or "").strip().upper()
    if text not in ANSWER_KEYS:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "correctAnswer must be A, B, C, or D.",
            {"field": "correctAnswer"},
        )
    return text


def _lesson_by_code(lesson_code):
    row = db.query_one(
        f"""
        SELECT TOP (1) {LESSON_COLUMNS}
        FROM dbo.Lessons AS l
        JOIN dbo.Modules AS m ON m.ModuleId = l.ModuleId
        WHERE l.LessonCode = ?
        ORDER BY l.LessonId
        """,
        (str(lesson_code or "").strip(),),
    )
    if row is None:
        raise ApiError(404, "LESSON_NOT_FOUND", "Lesson not found.")
    return row


def _module_exists(module_id):
    row = db.query_one(
        "SELECT ModuleId AS moduleId FROM dbo.Modules WHERE ModuleId = ?",
        (module_id,),
    )
    if row is None:
        raise ApiError(404, "MODULE_NOT_FOUND", "Module not found.")
    return row["moduleId"]


def _question_row(question_id):
    row = db.query_one(
        f"SELECT {QUESTION_COLUMNS} FROM dbo.QuizQuestions WHERE QuestionId = ?",
        (question_id,),
    )
    if row is None:
        raise ApiError(404, "QUESTION_NOT_FOUND", "Quiz question not found.")
    return _shape_question(row)


def _shape_question(row):
    item = dict(row)
    item["options"] = {key: item.pop(f"option{key}") for key in ANSWER_KEYS}
    item["correctAnswer"] = str(item["correctAnswer"] or "").strip().upper()
    return item


def _template_row(resource_id):
    row = db.query_one(
        f"SELECT {TEMPLATE_COLUMNS} FROM dbo.Resources WHERE ResourceId = ?",
        (str(resource_id or "").strip(),),
    )
    if row is None:
        raise ApiError(404, "TEMPLATE_NOT_FOUND", "Resource template not found.")
    return _shape_template(row)


def _shape_template(row):
    item = dict(row)
    item["fields"] = json.loads(item.pop("fieldsJson"))
    item["example"] = json.loads(item.pop("exampleJson"))
    item["isActive"] = bool(item["isActive"])
    return item


def _glossary_row(term_id):
    row = db.query_one(
        f"SELECT {GLOSSARY_COLUMNS} FROM dbo.GlossaryTerms WHERE TermId = ?",
        (term_id,),
    )
    if row is None:
        raise ApiError(404, "TERM_NOT_FOUND", "Glossary term not found.")
    return row


def _learner_rows():
    rows = db.query_all(
        """
        SELECT
            u.UserId AS userId,
            u.Username AS username,
            u.Email AS email,
            u.FirstName AS firstName,
            u.LastName AS lastName,
            u.[Role] AS role,
            u.BeltLevel AS beltLevel,
            u.RegistrationDate AS registrationDate,
            u.LastLogin AS lastLogin,
            u.IsActive AS isActive,
            (
                SELECT TOP (1) la.IpAddress
                FROM dbo.LoginAudit AS la
                WHERE la.UserId = u.UserId AND la.Success = 1
                ORDER BY la.AttemptedAt DESC, la.LoginAuditId DESC
            ) AS lastLoginIp,
            (
                SELECT COUNT(*)
                FROM dbo.UserProgress AS up
                WHERE up.UserId = u.UserId
                  AND up.Status = N'Completed'
                  AND up.LessonCode IS NOT NULL
            ) AS completedLessons,
            (
                SELECT COUNT(*)
                FROM dbo.Certificates AS c
                WHERE c.UserId = u.UserId AND c.IsRevoked = 0
            ) AS certificates
        FROM dbo.Users AS u
        ORDER BY u.RegistrationDate DESC, u.UserId DESC
        """
    )
    items = []
    for row in rows:
        item = security.shape_user(row)
        item["completedLessons"] = int(item["completedLessons"] or 0)
        item["certificates"] = int(item["certificates"] or 0)
        items.append(item)
    return items


def _exam_result_rows():
    rows = db.query_all(
        """
        SELECT
            ea.ExamAttemptId AS examAttemptId,
            ea.UserId AS userId,
            u.Username AS username,
            ea.BeltLevel AS beltLevel,
            ea.AttemptNumber AS attemptNumber,
            ea.QuestionCount AS questionCount,
            ea.CorrectCount AS correctCount,
            ea.Score AS score,
            ea.PassingScore AS passingScore,
            ea.Passed AS passed,
            ea.StartedAt AS startedAt,
            ea.CompletedAt AS completedAt
        FROM dbo.ExamAttempts AS ea
        JOIN dbo.Users AS u ON u.UserId = ea.UserId
        ORDER BY ea.CompletedAt DESC, ea.ExamAttemptId DESC
        """
    )
    items = []
    for row in rows:
        item = dict(row)
        item["score"] = float(item["score"])
        item["passingScore"] = float(item["passingScore"])
        item["passed"] = bool(item["passed"])
        items.append(item)
    return items


def _login_audit_rows(limit=500):
    rows = db.query_all(
        """
        SELECT TOP (?)
            la.LoginAuditId AS loginAuditId,
            la.UserId AS userId,
            la.Username AS username,
            la.IpAddress AS ipAddress,
            la.UserAgent AS userAgent,
            la.Success AS success,
            la.AttemptedAt AS attemptedAt
        FROM dbo.LoginAudit AS la
        ORDER BY la.AttemptedAt DESC, la.LoginAuditId DESC
        """,
        (int(limit),),
    )
    items = []
    for row in rows:
        item = dict(row)
        item["success"] = bool(item["success"])
        items.append(item)
    return items


def _curriculum_belt(value):
    text = str(value if value is not None else "").strip().lower()
    key = re.sub(r"[\s_]+", "-", text)
    key = re.sub(r"-+", "-", key).strip("-")
    if key.endswith("-belt"):
        key = key[:-5]
    return BELT_ALIASES.get(key)


def _duration_minutes(value):
    if value is None:
        return 60
    text = str(value).strip().lower()
    match = re.search(r"\d+(?:\.\d+)?", text)
    if not match:
        return 60
    amount = float(match.group(0))
    minutes = round(amount * 60) if "hour" in text else round(amount)
    return max(1, min(minutes, 10000))


def _curriculum_module(
    module,
    parent_belt,
    position,
    belt_meta,
    seen_codes,
    seen_module_ids,
    errors,
    index,
):
    title = _text(module.get("title"), "title", "Module title", maximum=200)
    belt_value = module.get("beltLevel") or module.get("belt")
    if belt_value is None and parent_belt is not None:
        belt_value = parent_belt.get("name") or parent_belt.get("id")
    belt_name = _curriculum_belt(belt_value)
    if belt_name is None:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "Belt level is invalid.",
            {"field": "beltLevel"},
        )

    explicit_id = module.get("moduleId")
    module_id = (
        _integer(explicit_id, "moduleId", "Module ID", minimum=1)
        if explicit_id is not None
        else position
    )
    if module_id in seen_module_ids:
        errors.append(f"modules[{index}] uses duplicate moduleId {module_id}.")
    seen_module_ids.add(module_id)

    lessons_input = module.get("lessons")
    if not isinstance(lessons_input, list):
        errors.append(f"modules[{index}].lessons must be an array.")
        lessons_input = []

    lessons = []
    for lesson_index, lesson in enumerate(lessons_input):
        if not isinstance(lesson, dict):
            errors.append(f"modules[{index}].lessons[{lesson_index}] must be an object.")
            continue
        code = _text(
            lesson.get("id") or lesson.get("lessonCode"),
            "lessonCode",
            "Lesson code",
            maximum=20,
        )
        if code.lower() in seen_codes:
            errors.append(f"Duplicate lesson code {code}.")
        seen_codes.add(code.lower())
        lessons.append(
            {
                "lessonCode": code,
                "lessonOrder": _integer(
                    lesson.get("order") or lesson.get("lessonOrder") or lesson_index + 1,
                    "lessonOrder",
                    "Lesson order",
                    minimum=1,
                ),
                "title": _text(
                    lesson.get("title"),
                    "title",
                    "Lesson title",
                    maximum=200,
                ),
                "objective": _text(
                    lesson.get("objective"),
                    "objective",
                    "Lesson objective",
                    required=False,
                    maximum=500,
                ),
            }
        )

    objectives = module.get("objectives")
    if isinstance(objectives, list):
        objectives = " | ".join(str(item).strip() for item in objectives if str(item).strip())
    elif objectives is not None:
        objectives = str(objectives).strip()
    elif lessons:
        objectives = " | ".join(
            lesson["objective"] for lesson in lessons if lesson["objective"]
        )
    else:
        objectives = None

    prerequisites = module.get("prerequisites")
    if prerequisites is None and parent_belt is not None:
        belt_key = str(parent_belt.get("id") or parent_belt.get("name") or "").strip().lower()
        prerequisites = belt_meta.get(belt_key, {}).get("prerequisites")
    prerequisites = _text(
        prerequisites,
        "prerequisites",
        "Prerequisites",
        required=False,
        maximum=200,
    )

    return {
        "moduleId": module_id,
        "title": title,
        "beltLevel": belt_name,
        "description": _text(
            module.get("summary") or module.get("description"),
            "description",
            "Module description",
            required=False,
            maximum=500,
        ),
        "durationMinutes": _duration_minutes(
            module.get("durationMinutes", module.get("duration"))
        ),
        "objectives": objectives,
        "prerequisites": prerequisites,
        "displayOrder": module_id,
        "lessons": lessons,
    }


def _curriculum_records(curriculum):
    errors = []
    if not isinstance(curriculum, dict):
        return {
            "beltCount": 0,
            "modules": [],
            "moduleCount": 0,
            "lessonCount": 0,
            "errors": ["curriculum must be a JSON object."],
        }

    belts = curriculum.get("belts")
    if not isinstance(belts, list):
        errors.append("curriculum.belts must be an array.")
        belts = []

    belt_meta = {}
    for index, belt in enumerate(belts):
        if not isinstance(belt, dict):
            errors.append(f"belts[{index}] must be an object.")
            continue
        belt_name = _curriculum_belt(belt.get("name") or belt.get("id"))
        if belt_name is None:
            errors.append(f"belts[{index}] has an invalid belt name.")
            continue
        belt_key = str(belt.get("id") or belt.get("name") or index).strip().lower()
        belt_meta[belt_key] = {
            "name": belt_name,
            "prerequisites": _text(
                belt.get("prerequisites"),
                "prerequisites",
                "Prerequisites",
                required=False,
                maximum=200,
            ),
        }

    modules_input = curriculum.get("modules")
    pairs = []
    if isinstance(modules_input, list):
        for index, module in enumerate(modules_input):
            pairs.append((module, None, index + 1))
    elif modules_input is not None:
        errors.append("curriculum.modules must be an array when provided.")
    else:
        position = 0
        for belt_index, belt in enumerate(belts):
            if not isinstance(belt, dict):
                continue
            belt_modules = belt.get("modules")
            if belt_modules is None:
                continue
            if not isinstance(belt_modules, list):
                errors.append(f"belts[{belt_index}].modules must be an array.")
                continue
            for module in belt_modules:
                position += 1
                pairs.append((module, belt, position))

    records = []
    seen_codes = set()
    seen_module_ids = set()
    lesson_total = 0

    for index, (module, parent_belt, position) in enumerate(pairs):
        if not isinstance(module, dict):
            errors.append(f"modules[{index}] must be an object.")
            continue

        module_codes = set(seen_codes)
        module_ids = set(seen_module_ids)
        try:
            record = _curriculum_module(
                module,
                parent_belt,
                position,
                belt_meta,
                module_codes,
                module_ids,
                errors,
                index,
            )
        except ApiError as exc:
            errors.append(f"modules[{index}]: {exc.message}")
            continue
        seen_codes.update(module_codes)
        seen_module_ids.update(module_ids)
        records.append(record)
        lesson_total += len(record["lessons"])

    if not records and not errors:
        errors.append("curriculum does not contain any modules.")

    return {
        "beltCount": len(belts),
        "modules": records,
        "moduleCount": len(records),
        "lessonCount": lesson_total,
        "errors": errors,
    }


def _apply_curriculum(records):
    connection = db.get_connection()
    cursor = connection.cursor()
    counters = {
        "modulesInserted": 0,
        "modulesUpdated": 0,
        "lessonsInserted": 0,
        "lessonsUpdated": 0,
    }
    try:
        for module in records["modules"]:
            cursor.execute(
                "SELECT ModuleId FROM dbo.Modules WHERE ModuleId = ?",
                (module["moduleId"],),
            )
            exists = cursor.fetchone() is not None
            if exists:
                cursor.execute(
                    """
                    UPDATE dbo.Modules
                    SET Title = ?,
                        BeltLevel = ?,
                        Description = ?,
                        DurationMinutes = ?,
                        Objectives = ?,
                        Prerequisites = ?,
                        DisplayOrder = ?
                    WHERE ModuleId = ?
                    """,
                    (
                        module["title"],
                        module["beltLevel"],
                        module["description"],
                        module["durationMinutes"],
                        module["objectives"],
                        module["prerequisites"],
                        module["displayOrder"],
                        module["moduleId"],
                    ),
                )
                counters["modulesUpdated"] += 1
            else:
                cursor.execute(
                    """
                    INSERT INTO dbo.Modules
                        (ModuleId, Title, BeltLevel, Description, DurationMinutes,
                         Objectives, Prerequisites, DisplayOrder)
                    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
                    """,
                    (
                        module["moduleId"],
                        module["title"],
                        module["beltLevel"],
                        module["description"],
                        module["durationMinutes"],
                        module["objectives"],
                        module["prerequisites"],
                        module["displayOrder"],
                    ),
                )
                counters["modulesInserted"] += 1

            for lesson in module["lessons"]:
                cursor.execute(
                    "SELECT LessonId FROM dbo.Lessons WHERE LessonCode = ?",
                    (lesson["lessonCode"],),
                )
                lesson_row = cursor.fetchone()
                if lesson_row is None:
                    cursor.execute(
                        """
                        INSERT INTO dbo.Lessons
                            (ModuleId, LessonCode, LessonOrder, Title, Objective)
                        VALUES (?, ?, ?, ?, ?)
                        """,
                        (
                            module["moduleId"],
                            lesson["lessonCode"],
                            lesson["lessonOrder"],
                            lesson["title"],
                            lesson["objective"],
                        ),
                    )
                    counters["lessonsInserted"] += 1
                else:
                    cursor.execute(
                        """
                        UPDATE dbo.Lessons
                        SET ModuleId = ?,
                            LessonOrder = ?,
                            Title = ?,
                            Objective = ?
                        WHERE LessonId = ?
                        """,
                        (
                            module["moduleId"],
                            lesson["lessonOrder"],
                            lesson["title"],
                            lesson["objective"],
                            lesson_row[0],
                        ),
                    )
                    counters["lessonsUpdated"] += 1
        connection.commit()
    except pyodbc.IntegrityError as exc:
        connection.rollback()
        current_app.logger.warning("Curriculum import constraint violation: %s", exc)
        raise ApiError(
            409,
            "CONFLICT",
            "The curriculum conflicts with existing data.",
        ) from exc
    except pyodbc.Error as exc:
        connection.rollback()
        current_app.logger.error("Curriculum import failed: %s", exc)
        raise ApiError(500, "DATABASE_ERROR", "The curriculum import failed.") from exc
    finally:
        cursor.close()
    return counters


@bp.get("/lessons")
@security.admin_required
def list_lessons():
    rows = db.query_all(
        f"""
        SELECT {LESSON_COLUMNS}
        FROM dbo.Lessons AS l
        JOIN dbo.Modules AS m ON m.ModuleId = l.ModuleId
        ORDER BY m.DisplayOrder, l.LessonOrder, l.LessonId
        """
    )
    return ok(rows, meta={"count": len(rows)})


@bp.post("/lessons")
@security.admin_required
def create_lesson():
    payload = json_body()
    lesson_code = _text(payload.get("lessonCode"), "lessonCode", "Lesson code", maximum=20)
    module_id = _integer(payload.get("moduleId"), "moduleId", "Module ID", minimum=1)
    lesson_order = _integer(
        payload.get("lessonOrder"),
        "lessonOrder",
        "Lesson order",
        minimum=1,
    )
    title = _text(payload.get("title"), "title", "Lesson title", maximum=200)
    objective = _text(
        payload.get("objective"),
        "objective",
        "Lesson objective",
        required=False,
        maximum=500,
    )
    _module_exists(module_id)
    duplicate = db.query_one(
        "SELECT TOP (1) LessonId AS lessonId FROM dbo.Lessons WHERE LessonCode = ?",
        (lesson_code,),
    )
    if duplicate is not None:
        raise ApiError(409, "CONFLICT", "A lesson with that lessonCode already exists.")
    created = db.insert_returning(
        """
        INSERT INTO dbo.Lessons (ModuleId, LessonCode, LessonOrder, Title, Objective)
        OUTPUT INSERTED.LessonId AS lessonId
        VALUES (?, ?, ?, ?, ?)
        """,
        (module_id, lesson_code, lesson_order, title, objective),
    )
    row = db.query_one(
        f"""
        SELECT {LESSON_COLUMNS}
        FROM dbo.Lessons AS l
        JOIN dbo.Modules AS m ON m.ModuleId = l.ModuleId
        WHERE l.LessonId = ?
        """,
        (created["lessonId"],),
    )
    return ok(row, status=201)


@bp.put("/lessons/<string:lesson_code>")
@security.admin_required
def update_lesson(lesson_code):
    existing = _lesson_by_code(lesson_code)
    payload = json_body()
    if "lessonCode" in payload and str(payload.get("lessonCode") or "").strip() != existing["lessonCode"]:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "lessonCode cannot be changed.",
            {"field": "lessonCode"},
        )
    module_id = (
        _integer(payload.get("moduleId"), "moduleId", "Module ID", minimum=1)
        if "moduleId" in payload
        else existing["moduleId"]
    )
    _module_exists(module_id)
    lesson_order = (
        _integer(payload.get("lessonOrder"), "lessonOrder", "Lesson order", minimum=1)
        if "lessonOrder" in payload
        else existing["lessonOrder"]
    )
    title = (
        _text(payload.get("title"), "title", "Lesson title", maximum=200)
        if "title" in payload
        else existing["title"]
    )
    objective = (
        _text(
            payload.get("objective"),
            "objective",
            "Lesson objective",
            required=False,
            maximum=500,
        )
        if "objective" in payload
        else existing["objective"]
    )
    db.execute(
        """
        UPDATE dbo.Lessons
        SET ModuleId = ?, LessonOrder = ?, Title = ?, Objective = ?
        WHERE LessonId = ?
        """,
        (module_id, lesson_order, title, objective, existing["lessonId"]),
    )
    return ok(_lesson_by_code(existing["lessonCode"]))


@bp.get("/questions")
@security.admin_required
def list_questions():
    quiz_id = request.args.get("quizId")
    if quiz_id is None:
        rows = db.query_all(
            f"SELECT {QUESTION_COLUMNS} FROM dbo.QuizQuestions ORDER BY QuestionId"
        )
    else:
        quiz_id = _integer(quiz_id, "quizId", "Quiz ID", minimum=1)
        rows = db.query_all(
            f"""
            SELECT {QUESTION_COLUMNS}
            FROM dbo.QuizQuestions
            WHERE QuizId = ?
            ORDER BY QuestionId
            """,
            (quiz_id,),
        )
    items = [_shape_question(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.post("/questions")
@security.admin_required
def create_question():
    payload = json_body()
    quiz_id = _integer(payload.get("quizId"), "quizId", "Quiz ID", minimum=1)
    quiz = db.query_one("SELECT QuizId AS quizId FROM dbo.Quizzes WHERE QuizId = ?", (quiz_id,))
    if quiz is None:
        raise ApiError(404, "QUIZ_NOT_FOUND", "Quiz not found.")
    question_text = _text(
        payload.get("questionText"),
        "questionText",
        "Question text",
        maximum=1000,
    )
    options = {
        key: _text(payload.get(f"option{key}"), f"option{key}", f"Option {key}", maximum=500)
        for key in ANSWER_KEYS
    }
    correct_answer = _correct_answer(payload.get("correctAnswer"))
    explanation = _text(
        payload.get("explanation"),
        "explanation",
        "Explanation",
        required=False,
        maximum=1000,
    )
    created = db.insert_returning(
        """
        INSERT INTO dbo.QuizQuestions
            (QuizId, QuestionText, OptionA, OptionB, OptionC, OptionD,
             CorrectAnswer, Explanation)
        OUTPUT INSERTED.QuestionId AS questionId
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            quiz_id,
            question_text,
            options["A"],
            options["B"],
            options["C"],
            options["D"],
            correct_answer,
            explanation,
        ),
    )
    return ok(_question_row(created["questionId"]), status=201)


@bp.put("/questions/<int:question_id>")
@security.admin_required
def update_question(question_id):
    existing = _question_row(question_id)
    payload = json_body()
    quiz_id = (
        _integer(payload.get("quizId"), "quizId", "Quiz ID", minimum=1)
        if "quizId" in payload
        else existing["quizId"]
    )
    quiz = db.query_one("SELECT QuizId AS quizId FROM dbo.Quizzes WHERE QuizId = ?", (quiz_id,))
    if quiz is None:
        raise ApiError(404, "QUIZ_NOT_FOUND", "Quiz not found.")
    question_text = (
        _text(payload.get("questionText"), "questionText", "Question text", maximum=1000)
        if "questionText" in payload
        else existing["questionText"]
    )
    options = dict(existing["options"])
    for key in ANSWER_KEYS:
        if f"option{key}" in payload:
            options[key] = _text(
                payload.get(f"option{key}"),
                f"option{key}",
                f"Option {key}",
                maximum=500,
            )
    correct_answer = (
        _correct_answer(payload.get("correctAnswer"))
        if "correctAnswer" in payload
        else existing["correctAnswer"]
    )
    explanation = (
        _text(
            payload.get("explanation"),
            "explanation",
            "Explanation",
            required=False,
            maximum=1000,
        )
        if "explanation" in payload
        else existing["explanation"]
    )
    db.execute(
        """
        UPDATE dbo.QuizQuestions
        SET QuizId = ?, QuestionText = ?, OptionA = ?, OptionB = ?,
            OptionC = ?, OptionD = ?, CorrectAnswer = ?, Explanation = ?
        WHERE QuestionId = ?
        """,
        (
            quiz_id,
            question_text,
            options["A"],
            options["B"],
            options["C"],
            options["D"],
            correct_answer,
            explanation,
            question_id,
        ),
    )
    return ok(_question_row(question_id))


@bp.get("/templates")
@security.admin_required
def list_templates():
    rows = db.query_all(
        f"SELECT {TEMPLATE_COLUMNS} FROM dbo.Resources ORDER BY SortOrder, Title"
    )
    items = [_shape_template(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.post("/templates")
@security.admin_required
def create_template():
    payload = json_body()
    resource_id = _text(
        payload.get("resourceId"),
        "resourceId",
        "Resource ID",
        maximum=50,
    )
    if not re.fullmatch(r"[a-z0-9]+(?:-[a-z0-9]+)*", resource_id):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "resourceId must use lowercase letters, numbers, and single hyphens.",
            {"field": "resourceId"},
        )
    title = _text(payload.get("title"), "title", "Template title", maximum=150)
    dmaic_phase = _dmaic_phase(payload.get("dmaicPhase"))
    min_belt = security.normalize_belt(payload.get("minBelt"))
    fields_json = _json_value(payload.get("fields"), "fields", "fields", list)
    example_json = _json_value(payload.get("example"), "example", "example", dict)
    icon = _text(payload.get("icon"), "icon", "Icon", required=False, maximum=60)
    estimated_minutes = _integer(
        payload.get("estimatedMinutes"),
        "estimatedMinutes",
        "Estimated minutes",
        required=False,
        minimum=0,
        maximum=10000,
    )
    description = _text(
        payload.get("description"),
        "description",
        "Description",
        required=False,
        maximum=600,
    )
    sort_order = _integer(
        payload.get("sortOrder", 0),
        "sortOrder",
        "Sort order",
        minimum=0,
        maximum=1000000,
    )
    is_active = _boolean(payload.get("isActive"), "isActive", "isActive", default=True)

    existing = db.query_one(
        "SELECT TOP (1) ResourceId AS resourceId FROM dbo.Resources WHERE ResourceId = ?",
        (resource_id,),
    )
    if existing is not None:
        raise ApiError(409, "CONFLICT", "A template with that resourceId already exists.")

    db.execute(
        """
        INSERT INTO dbo.Resources
            (ResourceId, Title, DMAICPhase, MinBelt, Icon, EstimatedMinutes,
             Description, FieldsJson, ExampleJson, SortOrder, IsActive)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        """,
        (
            resource_id,
            title,
            dmaic_phase,
            min_belt,
            icon,
            estimated_minutes,
            description,
            fields_json,
            example_json,
            sort_order,
            is_active,
        ),
    )
    return ok(_template_row(resource_id), status=201)


@bp.put("/templates/<string:resource_id>")
@security.admin_required
def update_template(resource_id):
    existing = _template_row(resource_id)
    payload = json_body()
    title = (
        _text(payload.get("title"), "title", "Template title", maximum=150)
        if "title" in payload
        else existing["title"]
    )
    dmaic_phase = (
        _dmaic_phase(payload.get("dmaicPhase"))
        if "dmaicPhase" in payload
        else existing["dmaicPhase"]
    )
    min_belt = (
        security.normalize_belt(payload.get("minBelt"))
        if "minBelt" in payload
        else existing["minBelt"]
    )
    fields_json = (
        _json_value(payload.get("fields"), "fields", "fields", list)
        if "fields" in payload
        else json.dumps(existing["fields"], ensure_ascii=False, separators=(",", ":"))
    )
    example_json = (
        _json_value(payload.get("example"), "example", "example", dict)
        if "example" in payload
        else json.dumps(existing["example"], ensure_ascii=False, separators=(",", ":"))
    )
    icon = (
        _text(payload.get("icon"), "icon", "Icon", required=False, maximum=60)
        if "icon" in payload
        else existing["icon"]
    )
    estimated_minutes = (
        _integer(
            payload.get("estimatedMinutes"),
            "estimatedMinutes",
            "Estimated minutes",
            required=False,
            minimum=0,
            maximum=10000,
        )
        if "estimatedMinutes" in payload
        else existing["estimatedMinutes"]
    )
    description = (
        _text(
            payload.get("description"),
            "description",
            "Description",
            required=False,
            maximum=600,
        )
        if "description" in payload
        else existing["description"]
    )
    sort_order = (
        _integer(
            payload.get("sortOrder"),
            "sortOrder",
            "Sort order",
            minimum=0,
            maximum=1000000,
        )
        if "sortOrder" in payload
        else existing["sortOrder"]
    )
    is_active = (
        _boolean(payload.get("isActive"), "isActive", "isActive", default=existing["isActive"])
        if "isActive" in payload
        else existing["isActive"]
    )
    db.execute(
        """
        UPDATE dbo.Resources
        SET Title = ?, DMAICPhase = ?, MinBelt = ?, Icon = ?, EstimatedMinutes = ?,
            Description = ?, FieldsJson = ?, ExampleJson = ?, SortOrder = ?, IsActive = ?
        WHERE ResourceId = ?
        """,
        (
            title,
            dmaic_phase,
            min_belt,
            icon,
            estimated_minutes,
            description,
            fields_json,
            example_json,
            sort_order,
            is_active,
            existing["resourceId"],
        ),
    )
    return ok(_template_row(existing["resourceId"]))


@bp.get("/glossary")
@security.admin_required
def list_glossary():
    rows = db.query_all(f"SELECT {GLOSSARY_COLUMNS} FROM dbo.GlossaryTerms ORDER BY Term")
    return ok(rows, meta={"count": len(rows)})


@bp.post("/glossary")
@security.admin_required
def create_glossary_term():
    payload = json_body()
    term = _text(payload.get("term"), "term", "Term", maximum=150)
    definition = _text(
        payload.get("definition"),
        "definition",
        "Definition",
        maximum=1000,
    )
    duplicate = db.query_one(
        "SELECT TOP (1) TermId AS termId FROM dbo.GlossaryTerms WHERE Term = ?",
        (term,),
    )
    if duplicate is not None:
        raise ApiError(409, "CONFLICT", "A glossary term with that name already exists.")
    created = db.insert_returning(
        """
        INSERT INTO dbo.GlossaryTerms (Term, Definition)
        OUTPUT INSERTED.TermId AS termId
        VALUES (?, ?)
        """,
        (term, definition),
    )
    return ok(_glossary_row(created["termId"]), status=201)


@bp.put("/glossary/<int:term_id>")
@security.admin_required
def update_glossary_term(term_id):
    existing = _glossary_row(term_id)
    payload = json_body()
    term = (
        _text(payload.get("term"), "term", "Term", maximum=150)
        if "term" in payload
        else existing["term"]
    )
    definition = (
        _text(payload.get("definition"), "definition", "Definition", maximum=1000)
        if "definition" in payload
        else existing["definition"]
    )
    duplicate = db.query_one(
        """
        SELECT TOP (1) TermId AS termId
        FROM dbo.GlossaryTerms
        WHERE Term = ? AND TermId <> ?
        """,
        (term, term_id),
    )
    if duplicate is not None:
        raise ApiError(409, "CONFLICT", "A glossary term with that name already exists.")
    db.execute(
        """
        UPDATE dbo.GlossaryTerms
        SET Term = ?, Definition = ?, UpdatedAt = SYSUTCDATETIME()
        WHERE TermId = ?
        """,
        (term, definition, term_id),
    )
    return ok(_glossary_row(term_id))


@bp.post("/import-curriculum")
@security.admin_required
def import_curriculum():
    payload = json_body()
    mode = str(payload.get("mode") or "validate").strip().lower()
    if mode not in {"validate", "apply"}:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "mode must be validate or apply.",
            {"field": "mode"},
        )
    records = _curriculum_records(payload.get("curriculum"))
    data = {
        "valid": not records["errors"],
        "belts": records["beltCount"],
        "modules": records["moduleCount"],
        "lessons": records["lessonCount"],
        "errors": records["errors"],
    }
    if mode == "validate":
        return ok(data)
    if records["errors"]:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "Curriculum validation failed. No changes were applied.",
            {"errors": records["errors"][:100]},
        )
    counters = _apply_curriculum(records)
    data.update(counters)
    data["applied"] = True
    return ok(data)


@bp.get("/learners")
@security.admin_required
def list_learners():
    items = _learner_rows()
    return ok(items, meta={"count": len(items)})


@bp.get("/exam-results")
@security.admin_required
def list_exam_results():
    items = _exam_result_rows()
    return ok(items, meta={"count": len(items)})


@bp.get("/login-audit")
@security.admin_required
def list_login_audit():
    limit = _integer(
        request.args.get("limit", 500),
        "limit",
        "Limit",
        minimum=1,
        maximum=5000,
    )
    items = _login_audit_rows(limit)
    return ok(items, meta={"count": len(items)})


@bp.get("/export/learners.csv")
@security.admin_required
def export_learners():
    output = StringIO(newline="")
    writer = csv.writer(output, lineterminator="\r\n")
    writer.writerow(
        [
            "UserId",
            "Username",
            "Email",
            "BeltLevel",
            "CompletedLessons",
            "Certificates",
            "LastLogin",
            "LastLoginIp",
        ]
    )
    for item in _learner_rows():
        writer.writerow(
            [
                item["userId"],
                item["username"],
                item["email"],
                item["beltLevel"],
                item["completedLessons"],
                item["certificates"],
                item["lastLogin"],
                item["lastLoginIp"],
            ]
        )
    response = Response(output.getvalue(), content_type="text/csv; charset=utf-8")
    response.headers["Content-Disposition"] = 'attachment; filename="learners.csv"'
    return response


@bp.get("/export/exam-results.csv")
@security.admin_required
def export_exam_results():
    output = StringIO(newline="")
    writer = csv.writer(output, lineterminator="\r\n")
    writer.writerow(
        [
            "ExamAttemptId",
            "UserId",
            "Username",
            "BeltLevel",
            "AttemptNumber",
            "QuestionCount",
            "CorrectCount",
            "Score",
            "PassingScore",
            "Passed",
            "StartedAt",
            "CompletedAt",
        ]
    )
    for item in _exam_result_rows():
        writer.writerow(
            [
                item["examAttemptId"],
                item["userId"],
                item["username"],
                item["beltLevel"],
                item["attemptNumber"],
                item["questionCount"],
                item["correctCount"],
                item["score"],
                item["passingScore"],
                "Yes" if item["passed"] else "No",
                item["startedAt"],
                item["completedAt"],
            ]
        )
    response = Response(output.getvalue(), content_type="text/csv; charset=utf-8")
    response.headers["Content-Disposition"] = 'attachment; filename="exam-results.csv"'
    return response


@bp.get("/export/login-audit.csv")
@security.admin_required
def export_login_audit():
    limit = _integer(
        request.args.get("limit", 5000),
        "limit",
        "Limit",
        minimum=1,
        maximum=5000,
    )
    output = StringIO(newline="")
    writer = csv.writer(output, lineterminator="\r\n")
    writer.writerow(
        [
            "LoginAuditId",
            "UserId",
            "Username",
            "IpAddress",
            "Success",
            "AttemptedAt",
            "UserAgent",
        ]
    )
    for item in _login_audit_rows(limit):
        writer.writerow(
            [
                item["loginAuditId"],
                item["userId"],
                item["username"],
                item["ipAddress"],
                "Yes" if item["success"] else "No",
                item["attemptedAt"],
                item["userAgent"],
            ]
        )
    response = Response(output.getvalue(), content_type="text/csv; charset=utf-8")
    response.headers["Content-Disposition"] = 'attachment; filename="login-audit.csv"'
    return response
