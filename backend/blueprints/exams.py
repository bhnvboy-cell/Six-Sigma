import json
from datetime import datetime, timezone

from flask import Blueprint, current_app, request

from .. import db, exam_bank, security
from ..responses import ApiError, json_body, ok

bp = Blueprint("exams", __name__, url_prefix="/api/exams")


def _belt(value):
    normalized = str(value or "").strip().lower()
    if normalized not in security.BELT_LEVELS:
        raise ApiError(404, "EXAM_NOT_FOUND", "Belt exam not found.")
    return normalized


def _passing_score():
    return float(current_app.config["EXAM_PASS_PERCENT"])


def _lang(payload=None):
    value = None
    if isinstance(payload, dict):
        value = payload.get("lang")
    if value is None:
        value = request.args.get("lang")
    return exam_bank.normalize_lang(value)


def _time_limit(question_count):
    return max(45, int(question_count))


def _require_unlocked(user, belt):
    if security.belt_rank(belt) > security.belt_rank(user["beltLevel"]):
        previous = (
            security.BELT_NAMES[security.BELT_LEVELS[security.belt_rank(belt) - 1]]
            if security.belt_rank(belt) > 0
            else "the previous belt"
        )
        raise ApiError(
            403,
            "BELT_LOCKED",
            f"Pass the {previous} exam before taking this exam.",
            {"beltLevel": belt, "requiredBelt": previous},
        )


def _started_at(value):
    if value is None or str(value).strip() == "":
        return None
    text = str(value).strip().replace("Z", "+00:00")
    try:
        parsed = datetime.fromisoformat(text)
    except ValueError as exc:
        raise ApiError(
            400,
            "INVALID_STARTED_AT",
            "startedAt must be an ISO 8601 date-time.",
            {"field": "startedAt"},
        ) from exc
    if parsed.tzinfo is not None:
        parsed = parsed.astimezone(timezone.utc).replace(tzinfo=None)
    return parsed


def _attempt_row(row):
    item = dict(row)
    item["passed"] = bool(item.get("passed"))
    if item.get("score") is not None:
        item["score"] = float(item["score"])
    if item.get("passingScore") is not None:
        item["passingScore"] = float(item["passingScore"])
    return item


def _best_attempts(user_id):
    rows = db.query_all(
        """
        SELECT
            BeltLevel AS beltLevel,
            MAX(Score) AS bestScore,
            MAX(CASE WHEN Passed = 1 THEN 1 ELSE 0 END) AS passed,
            COUNT(*) AS attemptCount
        FROM dbo.ExamAttempts
        WHERE UserId = ?
        GROUP BY BeltLevel
        """,
        (user_id,),
    )
    return {
        row["beltLevel"]: {
            "bestScore": float(row["bestScore"]) if row["bestScore"] is not None else None,
            "passed": bool(row["passed"]),
            "attemptCount": int(row["attemptCount"] or 0),
        }
        for row in rows
    }


@bp.get("")
@security.login_required
def list_exams():
    user = security.current_user()
    lang = _lang()
    best = _best_attempts(user["userId"])
    passing = _passing_score()
    items = []
    for belt in security.BELT_LEVELS:
        question_count = exam_bank.question_count(belt, lang)
        summary = best.get(belt, {})
        items.append(
            {
                "belt": belt,
                "title": f"{security.BELT_NAMES[belt]} Exam",
                "questionCount": question_count,
                "passPercent": passing,
                "timeLimitMinutes": _time_limit(question_count),
                "unlocked": security.belt_rank(belt) <= security.belt_rank(user["beltLevel"]),
                "bestScore": summary.get("bestScore"),
                "passed": summary.get("passed", False),
                "attemptCount": summary.get("attemptCount", 0),
            }
        )
    return ok(items, meta={"count": len(items)})


@bp.get("/<string:belt>")
@security.login_required
def get_exam(belt):
    user = security.current_user()
    belt = _belt(belt)
    lang = _lang()
    _require_unlocked(user, belt)
    questions = exam_bank.public_questions(belt, lang)
    return ok(
        {
            "belt": belt,
            "title": f"{security.BELT_NAMES[belt]} Exam",
            "questionCount": len(questions),
            "passPercent": _passing_score(),
            "timeLimitMinutes": _time_limit(len(questions)),
            "questions": questions,
        }
    )


@bp.get("/<string:belt>/attempts")
@security.login_required
def list_attempts(belt):
    user = security.current_user()
    belt = _belt(belt)
    rows = db.query_all(
        """
        SELECT
            ExamAttemptId AS examAttemptId,
            AttemptNumber AS attemptNumber,
            QuestionCount AS questionCount,
            CorrectCount AS correctCount,
            Score AS score,
            PassingScore AS passingScore,
            Passed AS passed,
            StartedAt AS startedAt,
            CompletedAt AS completedAt
        FROM dbo.ExamAttempts
        WHERE UserId = ? AND BeltLevel = ?
        ORDER BY CompletedAt DESC, ExamAttemptId DESC
        """,
        (user["userId"], belt),
    )
    items = [_attempt_row(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.post("/<string:belt>/attempts")
@security.login_required
def submit_attempt(belt):
    user = security.current_user()
    belt = _belt(belt)
    _require_unlocked(user, belt)
    payload = json_body()
    lang = _lang(payload)
    scored = exam_bank.score_answers(belt, payload.get("answers"), lang)
    started_at = _started_at(payload.get("startedAt"))
    passing = _passing_score()
    passed = scored["score"] >= passing

    previous = db.query_one(
        """
        SELECT COUNT(*) AS attemptCount
        FROM dbo.ExamAttempts
        WHERE UserId = ? AND BeltLevel = ?
        """,
        (user["userId"], belt),
    )
    attempt_number = int(previous["attemptCount"] or 0) + 1
    answers = {
        item["questionId"]: item["selected"]
        for item in scored["results"]
        if item["selected"] is not None
    }
    started_at = started_at or datetime.now(timezone.utc).replace(tzinfo=None)

    created = db.insert_returning(
        """
        INSERT INTO dbo.ExamAttempts
            (UserId, BeltLevel, AttemptNumber, QuestionCount, CorrectCount, Score,
             PassingScore, Passed, AnswersJson, StartedAt, CompletedAt)
        OUTPUT INSERTED.ExamAttemptId AS examAttemptId,
               INSERTED.StartedAt AS startedAt,
               INSERTED.CompletedAt AS completedAt
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, SYSUTCDATETIME())
        """,
        (
            user["userId"],
            belt,
            attempt_number,
            scored["questionCount"],
            scored["correctCount"],
            scored["score"],
            passing,
            passed,
            json.dumps(answers, ensure_ascii=False),
            started_at,
        ),
    )

    promoted = False
    next_rank = security.belt_rank(belt) + 1
    if passed and next_rank < len(security.BELT_LEVELS):
        next_belt = security.BELT_LEVELS[next_rank]
        if next_rank > security.belt_rank(user["beltLevel"]):
            db.execute(
                "UPDATE dbo.Users SET BeltLevel = ? WHERE UserId = ?",
                (next_belt, user["userId"]),
            )
            promoted = True

    updated = security.user_by_id(user["userId"])
    access = security.belt_access(updated["beltLevel"])
    return ok(
        {
            "examAttemptId": created["examAttemptId"],
            "attemptNumber": attempt_number,
            "beltLevel": belt,
            "questionCount": scored["questionCount"],
            "answeredCount": scored["answeredCount"],
            "correctCount": scored["correctCount"],
            "score": scored["score"],
            "passingScore": passing,
            "passed": passed,
            "startedAt": created["startedAt"],
            "completedAt": created["completedAt"],
            "results": scored["results"],
            "promoted": promoted,
            "userBeltLevel": updated["beltLevel"],
            "unlockedBelts": access["unlockedBelts"],
            "nextBelt": access["nextBelt"],
        },
        status=201,
    )
