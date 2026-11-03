import json
from functools import lru_cache
from pathlib import Path

from .responses import ApiError

DATA_PATH = Path(__file__).resolve().parent.parent / "data" / "quizzes.json"
I18N_DIR = Path(__file__).resolve().parent.parent / "data" / "i18n"
SUPPORTED_LANGS = {"en", "ar", "hi", "ml", "te", "de", "fr"}
OPTION_KEYS = ("A", "B", "C", "D")
BANK_KEYS = {
    "white": "white",
    "yellow": "yellow",
    "green": "green",
    "black": "black",
    "master-black": "master",
}
MAX_ANSWER_KEYS = 500


def normalize_lang(value):
    code = str(value or "").strip().lower().split("-")[0]
    return code if code in SUPPORTED_LANGS else "en"


@lru_cache(maxsize=8)
def _bank(lang="en"):
    lang = normalize_lang(lang)
    path = DATA_PATH
    if lang != "en":
        localized = I18N_DIR / lang / "quizzes.json"
        if localized.exists():
            path = localized
    try:
        with path.open("r", encoding="utf-8") as handle:
            data = json.load(handle)
    except OSError as exc:
        raise ApiError(
            503,
            "EXAM_BANK_UNAVAILABLE",
            "The exam question bank is unavailable.",
        ) from exc
    except ValueError as exc:
        raise ApiError(
            500,
            "EXAM_BANK_INVALID",
            "The exam question bank could not be read.",
        ) from exc
    return data


def bank_key(belt):
    key = BANK_KEYS.get(str(belt or "").strip().lower())
    if key is None:
        raise ApiError(404, "EXAM_NOT_FOUND", "Belt exam not found.")
    return key


def questions(belt, lang="en"):
    items = _bank(lang).get(bank_key(belt))
    if not isinstance(items, list) or not items:
        raise ApiError(404, "EXAM_NOT_FOUND", "Belt exam not found.")
    return items


def question_count(belt, lang="en"):
    return len(questions(belt, lang))


def question_id(belt, index):
    return f"{belt}-{index + 1}"


def _normalized_answer(value):
    return str(value if value is not None else "").strip().upper()


def public_questions(belt, lang="en"):
    return [
        {
            "questionId": question_id(belt, index),
            "prompt": item["q"],
            "options": [
                {"key": OPTION_KEYS[option_index], "text": option}
                for option_index, option in enumerate(item["options"])
            ],
        }
        for index, item in enumerate(questions(belt, lang))
    ]


def score_answers(belt, answers, lang="en"):
    if not isinstance(answers, dict):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "answers must be a JSON object keyed by question ID.",
            {"field": "answers"},
        )
    if len(answers) > MAX_ANSWER_KEYS:
        raise ApiError(400, "VALIDATION_ERROR", "Too many exam answers were submitted.")

    items = questions(belt, lang)
    valid_ids = {question_id(belt, index) for index in range(len(items))}
    selected = {}
    for key, value in answers.items():
        key_text = str(key or "").strip()
        if key_text not in valid_ids:
            continue
        answer = _normalized_answer(value)
        if answer in OPTION_KEYS:
            selected[key_text] = answer

    if not selected:
        raise ApiError(
            422,
            "EXAM_NOT_SCORED",
            "No valid answers were submitted for this exam.",
            {"field": "answers"},
        )

    results = []
    correct_count = 0
    for index, item in enumerate(items):
        current_id = question_id(belt, index)
        correct_key = OPTION_KEYS[int(item["correct"])]
        chosen = selected.get(current_id)
        is_correct = chosen == correct_key
        if is_correct:
            correct_count += 1
        results.append(
            {
                "questionId": current_id,
                "selected": chosen,
                "correctOption": correct_key,
                "isCorrect": is_correct,
                "explanation": item.get("explanation", ""),
            }
        )

    total = len(items)
    return {
        "questionCount": total,
        "answeredCount": len(selected),
        "correctCount": correct_count,
        "score": round((correct_count / total) * 100, 2) if total else 0,
        "results": results,
    }
