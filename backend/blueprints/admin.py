from flask import Blueprint

from ..responses import not_implemented

bp = Blueprint("admin", __name__, url_prefix="/api/admin")


@bp.get("/lessons")
def list_lessons():
    not_implemented(5, "Lesson administration is added in Stage 5.")


@bp.post("/lessons")
def create_lesson():
    not_implemented(5, "Lesson administration is added in Stage 5.")


@bp.put("/lessons/<string:lesson_code>")
def update_lesson(lesson_code):
    not_implemented(5, "Lesson administration is added in Stage 5.")


@bp.get("/questions")
def list_questions():
    not_implemented(5, "Quiz-question administration is added in Stage 5.")


@bp.post("/questions")
def create_question():
    not_implemented(5, "Quiz-question administration is added in Stage 5.")


@bp.put("/questions/<int:question_id>")
def update_question(question_id):
    not_implemented(5, "Quiz-question administration is added in Stage 5.")


@bp.get("/templates")
def list_templates():
    not_implemented(5, "Template administration is added in Stage 5.")


@bp.post("/templates")
def create_template():
    not_implemented(5, "Template administration is added in Stage 5.")


@bp.put("/templates/<string:resource_id>")
def update_template(resource_id):
    not_implemented(5, "Template administration is added in Stage 5.")


@bp.get("/glossary")
def list_glossary():
    not_implemented(5, "Glossary administration is added in Stage 5.")


@bp.post("/glossary")
def create_glossary_term():
    not_implemented(5, "Glossary administration is added in Stage 5.")


@bp.put("/glossary/<int:term_id>")
def update_glossary_term(term_id):
    not_implemented(5, "Glossary administration is added in Stage 5.")


@bp.post("/import-curriculum")
def import_curriculum():
    not_implemented(5, "Curriculum JSON import is added in Stage 5.")


@bp.get("/learners")
def list_learners():
    not_implemented(5, "Learner reporting is added in Stage 5.")


@bp.get("/exam-results")
def list_exam_results():
    not_implemented(5, "Exam reporting is added in Stage 5.")


@bp.get("/export/learners.csv")
def export_learners():
    not_implemented(5, "Learner CSV export is added in Stage 5.")
