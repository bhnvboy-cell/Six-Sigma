from flask import Blueprint

from .. import db, security
from ..responses import ApiError, json_body, ok

bp = Blueprint("progress", __name__, url_prefix="/api/progress")

PROGRESS_COLUMNS = """
    ProgressId AS progressId,
    ModuleId AS moduleId,
    LessonId AS lessonId,
    LessonCode AS lessonCode,
    Status AS status,
    Score AS score,
    TimeSpentMinutes AS timeSpentMinutes,
    StartDate AS startDate,
    CompletionDate AS completionDate,
    UpdatedAt AS updatedAt
"""

STATUS_ALIASES = {
    "completed": "Completed",
    "complete": "Completed",
    "in progress": "In Progress",
    "in_progress": "In Progress",
    "in-progress": "In Progress",
    "started": "In Progress",
    "not started": "Not Started",
    "not_started": "Not Started",
    "not-started": "Not Started",
}


def _status(value, default="Completed"):
    normalized = str(value or default).strip().lower()
    if normalized not in STATUS_ALIASES:
        raise ApiError(
            400,
            "INVALID_STATUS",
            "Status must be Completed, In Progress, or Not Started.",
            {"field": "status"},
        )
    return STATUS_ALIASES[normalized]


def _time_spent(value):
    if value is None:
        return 0
    try:
        minutes = int(value)
    except (TypeError, ValueError) as exc:
        raise ApiError(
            400,
            "INVALID_TIME",
            "Time spent must be a whole number of minutes.",
            {"field": "timeSpentMinutes"},
        ) from exc
    return max(0, min(minutes, 1440))


def _lesson_by_code(lesson_code):
    row = db.query_one(
        """
        SELECT LessonId AS lessonId, ModuleId AS moduleId, LessonCode AS lessonCode
        FROM dbo.Lessons
        WHERE LessonCode = ?
        """,
        (str(lesson_code or "").strip(),),
    )
    if row is None:
        raise ApiError(404, "LESSON_NOT_FOUND", "Lesson not found.")
    return row


def _get_progress(user_id, lesson_code):
    row = db.query_one(
        f"""
        SELECT {PROGRESS_COLUMNS}
        FROM dbo.UserProgress
        WHERE UserId = ? AND LessonCode = ?
        """,
        (user_id, lesson_code),
    )
    return row


def _mark_lesson(user_id, lesson, status, minutes):
    code = lesson["lessonCode"]
    existing = db.query_one(
        "SELECT ProgressId AS progressId FROM dbo.UserProgress WHERE UserId = ? AND LessonCode = ?",
        (user_id, code),
    )
    if existing is not None:
        db.execute(
            """
            UPDATE dbo.UserProgress
            SET Status = ?,
                ModuleId = ?,
                LessonId = ?,
                TimeSpentMinutes = ?,
                StartDate = COALESCE(StartDate, SYSUTCDATETIME()),
                CompletionDate = CASE
                    WHEN ? = N'Completed' THEN COALESCE(CompletionDate, SYSUTCDATETIME())
                    ELSE NULL
                END,
                UpdatedAt = SYSUTCDATETIME()
            WHERE ProgressId = ?
            """,
            (
                status,
                lesson["moduleId"],
                lesson["lessonId"],
                minutes,
                status,
                existing["progressId"],
            ),
        )
    else:
        db.execute(
            """
            INSERT INTO dbo.UserProgress
                (UserId, ModuleId, LessonId, LessonCode, Status, StartDate, CompletionDate,
                 TimeSpentMinutes, UpdatedAt)
            VALUES (?, ?, ?, ?, ?, SYSUTCDATETIME(),
                    CASE WHEN ? = N'Completed' THEN SYSUTCDATETIME() ELSE NULL END,
                    ?, SYSUTCDATETIME())
            """,
            (
                user_id,
                lesson["moduleId"],
                lesson["lessonId"],
                code,
                status,
                status,
                minutes,
            ),
        )
    return _get_progress(user_id, code)


def _summary(user_id):
    totals = db.query_one(
        """
        SELECT
            COUNT(*) AS totalLessons,
            SUM(CASE WHEN up.Status = N'Completed' THEN 1 ELSE 0 END) AS completedLessons
        FROM dbo.Lessons AS l
        LEFT JOIN dbo.UserProgress AS up
            ON up.LessonId = l.LessonId AND up.UserId = ?
        """,
        (user_id,),
    )
    total = int(totals["totalLessons"] or 0)
    completed = int(totals["completedLessons"] or 0)
    return {
        "totalLessons": total,
        "completedLessons": completed,
        "percentComplete": round((completed / total) * 100, 1) if total else 0,
    }


@bp.get("")
@security.login_required
def list_progress():
    user = security.current_user()
    rows = db.query_all(
        f"""
        SELECT {PROGRESS_COLUMNS}
        FROM dbo.UserProgress
        WHERE UserId = ? AND LessonCode IS NOT NULL
        ORDER BY ModuleId, LessonCode
        """,
        (user["userId"],),
    )
    module_rows = db.query_all(
        """
        SELECT
            l.ModuleId AS moduleId,
            COUNT(*) AS totalLessons,
            SUM(CASE WHEN up.Status = N'Completed' THEN 1 ELSE 0 END) AS completedLessons
        FROM dbo.Lessons AS l
        LEFT JOIN dbo.UserProgress AS up
            ON up.LessonId = l.LessonId AND up.UserId = ?
        GROUP BY l.ModuleId
        ORDER BY l.ModuleId
        """,
        (user["userId"],),
    )
    modules = [
        {
            "moduleId": row["moduleId"],
            "totalLessons": int(row["totalLessons"] or 0),
            "completedLessons": int(row["completedLessons"] or 0),
            "completed": int(row["completedLessons"] or 0) == int(row["totalLessons"] or 0),
        }
        for row in module_rows
    ]
    return ok(
        {
            "lessons": rows,
            "summary": _summary(user["userId"]),
            "moduleProgress": modules,
        }
    )


@bp.put("/modules/<int:module_id>")
@security.login_required
def update_module_progress(module_id):
    user = security.current_user()
    payload = json_body()
    status = _status(payload.get("status"), default="Completed")
    lessons = db.query_all(
        """
        SELECT LessonId AS lessonId, ModuleId AS moduleId, LessonCode AS lessonCode
        FROM dbo.Lessons
        WHERE ModuleId = ?
        ORDER BY LessonOrder, LessonId
        """,
        (module_id,),
    )
    if not lessons:
        raise ApiError(404, "MODULE_NOT_FOUND", "Module lessons not found.")

    if status == "Not Started":
        db.execute(
            "DELETE FROM dbo.UserProgress WHERE UserId = ? AND ModuleId = ?",
            (user["userId"], module_id),
        )
    else:
        for lesson in lessons:
            _mark_lesson(user["userId"], lesson, status, 0)

    return ok(
        {
            "moduleId": module_id,
            "status": status,
            "lessonCodes": [lesson["lessonCode"] for lesson in lessons],
            "summary": _summary(user["userId"]),
        }
    )


@bp.put("/lessons/<string:lesson_code>")
@security.login_required
def update_lesson_progress(lesson_code):
    user = security.current_user()
    payload = json_body()
    lesson = _lesson_by_code(lesson_code)
    status = _status(payload.get("status"), default="Completed")
    minutes = _time_spent(payload.get("timeSpentMinutes"))

    if status == "Not Started":
        db.execute(
            "DELETE FROM dbo.UserProgress WHERE UserId = ? AND LessonCode = ?",
            (user["userId"], lesson["lessonCode"]),
        )
        return ok(
            {
                "lessonCode": lesson["lessonCode"],
                "moduleId": lesson["moduleId"],
                "status": "Not Started",
                "deleted": True,
            }
        )

    progress = _mark_lesson(user["userId"], lesson, status, minutes)
    return ok({"progress": progress})


@bp.get("/belt")
@security.login_required
def get_belt():
    user = security.current_user()
    access = security.belt_access(user["beltLevel"])
    return ok(access)


@bp.put("/belt")
@security.admin_required
def update_belt():
    admin = security.current_user()
    payload = json_body()
    belt_level = security.normalize_belt(payload.get("beltLevel"))
    target_id = payload.get("userId", admin["userId"])
    try:
        target_id = int(target_id)
    except (TypeError, ValueError) as exc:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "userId must be a whole number.",
            {"field": "userId"},
        ) from exc
    target = security.user_by_id(target_id)
    if target is None:
        raise ApiError(404, "USER_NOT_FOUND", "Learner account not found.")
    db.execute(
        "UPDATE dbo.Users SET BeltLevel = ? WHERE UserId = ?",
        (belt_level, target_id),
    )
    access = security.belt_access(belt_level)
    access["userId"] = target_id
    return ok(access)


@bp.post("/migrate-local")
@security.login_required
def migrate_local_progress():
    user = security.current_user()
    payload = json_body()
    completed_modules = payload.get("completedModules") or []
    lesson_codes = payload.get("lessons") or []
    if not isinstance(completed_modules, list) or not isinstance(lesson_codes, list):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "completedModules and lessons must be arrays.",
        )
    if len(completed_modules) > 200 or len(lesson_codes) > 500:
        raise ApiError(400, "VALIDATION_ERROR", "Too many migration entries.")

    module_ids = set()
    for value in completed_modules:
        try:
            module_ids.add(int(value))
        except (TypeError, ValueError):
            continue

    all_lessons = db.query_all(
        "SELECT LessonId AS lessonId, ModuleId AS moduleId, LessonCode AS lessonCode FROM dbo.Lessons"
    )
    by_code = {row["lessonCode"].lower(): row for row in all_lessons}
    target_codes = set()

    for row in all_lessons:
        if row["moduleId"] in module_ids:
            target_codes.add(row["lessonCode"].lower())

    for value in lesson_codes:
        code = str(value or "").strip().lower()
        if code in by_code:
            target_codes.add(code)

    for code in sorted(target_codes):
        _mark_lesson(user["userId"], by_code[code], "Completed", 0)

    requested_belt = payload.get("beltLevel")
    if requested_belt is not None:
        requested_belt = security.normalize_belt(requested_belt)

    updated = security.user_by_id(user["userId"])
    return ok(
        {
            "importedLessons": len(target_codes),
            "completedModules": len(module_ids),
            "beltLevel": updated["beltLevel"],
            "summary": _summary(user["userId"]),
        },
        meta={
            "requestedBeltLevel": requested_belt,
            "beltLevelIgnored": requested_belt is not None,
        },
    )
