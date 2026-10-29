from flask import Blueprint

from ..responses import not_implemented

bp = Blueprint("exams", __name__, url_prefix="/api/exams")


@bp.get("")
def list_exams():
    not_implemented(3, "Exam summaries are added in Stage 3.")


@bp.get("/<string:belt>")
def get_exam(belt):
    not_implemented(3, "Exam delivery is added in Stage 3.")


@bp.get("/<string:belt>/attempts")
def list_attempts(belt):
    not_implemented(3, "Exam attempt history is added in Stage 3.")


@bp.post("/<string:belt>/attempts")
def submit_attempt(belt):
    not_implemented(3, "Server-side exam scoring is added in Stage 3.")
