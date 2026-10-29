from flask import Blueprint

from ..responses import not_implemented

bp = Blueprint("auth", __name__, url_prefix="/api/auth")


@bp.post("/register")
def register():
    not_implemented(2, "Registration is added in Stage 2.")


@bp.post("/login")
def login():
    not_implemented(2, "Login is added in Stage 2.")


@bp.post("/logout")
def logout():
    not_implemented(2, "Logout is added in Stage 2.")


@bp.get("/me")
def current_user():
    not_implemented(2, "Current-user lookup is added in Stage 2.")
