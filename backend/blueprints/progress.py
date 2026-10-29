from flask import Blueprint

from ..responses import not_implemented

bp = Blueprint("progress", __name__, url_prefix="/api/progress")


@bp.get("")
def list_progress():
    not_implemented(2, "Progress retrieval is added in Stage 2.")


@bp.put("/lessons/<string:lesson_code>")
def update_lesson_progress(lesson_code):
    not_implemented(2, "Lesson progress updates are added in Stage 2.")


@bp.get("/belt")
def get_belt():
    not_implemented(2, "Belt-level retrieval is added in Stage 2.")


@bp.put("/belt")
def update_belt():
    not_implemented(3, "Server-side belt gating is added in Stage 3.")
