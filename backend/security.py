from functools import wraps

from flask import g, session

from . import db
from .responses import ApiError

BELT_LEVELS = ("white", "yellow", "green", "black", "master-black")

BELT_NAMES = {
    "white": "White Belt",
    "yellow": "Yellow Belt",
    "green": "Green Belt",
    "black": "Black Belt",
    "master-black": "Master Black Belt",
}

USER_COLUMNS = """
    UserId AS userId,
    Username AS username,
    Email AS email,
    FirstName AS firstName,
    LastName AS lastName,
    [Role] AS role,
    BeltLevel AS beltLevel,
    RegistrationDate AS registrationDate,
    LastLogin AS lastLogin,
    IsActive AS isActive
"""


def belt_rank(value):
    normalized = str(value or "").strip().lower()
    try:
        return BELT_LEVELS.index(normalized)
    except ValueError:
        return -1


def normalize_belt(value, default="white"):
    normalized = str(value or default).strip().lower()
    if normalized not in BELT_LEVELS:
        raise ApiError(
            400,
            "INVALID_BELT",
            "Belt level must be one of: " + ", ".join(BELT_LEVELS) + ".",
            {"field": "beltLevel"},
        )
    return normalized


def belt_access(value):
    level = normalize_belt(value)
    rank = belt_rank(level)
    return {
        "beltLevel": level,
        "beltName": BELT_NAMES[level],
        "unlockedBelts": list(BELT_LEVELS[: rank + 1]),
        "nextBelt": BELT_LEVELS[rank + 1] if rank < len(BELT_LEVELS) - 1 else None,
    }


def shape_user(row):
    if row is None:
        return None
    user = dict(row)
    user["isActive"] = bool(user.get("isActive"))
    if str(user.get("beltLevel") or "").strip().lower() not in BELT_LEVELS:
        user["beltLevel"] = "white"
    return user


def user_by_id(user_id):
    row = db.query_one(
        f"SELECT {USER_COLUMNS} FROM dbo.Users WHERE UserId = ?",
        (user_id,),
    )
    return shape_user(row)


def start_session(user_id):
    session.clear()
    session.permanent = True
    session["user_id"] = int(user_id)


def end_session():
    session.clear()


def current_user():
    return getattr(g, "current_user", None)


def _load_request_user():
    user_id = session.get("user_id")
    if user_id is None:
        raise ApiError(401, "AUTH_REQUIRED", "Sign in to continue.")
    user = user_by_id(user_id)
    if user is None or not user["isActive"]:
        session.clear()
        raise ApiError(401, "AUTH_REQUIRED", "Your session is no longer valid.")
    g.current_user = user
    return user


def login_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        _load_request_user()
        return view(*args, **kwargs)

    return wrapped


def admin_required(view):
    @wraps(view)
    def wrapped(*args, **kwargs):
        user = _load_request_user()
        if user["role"] != "admin":
            raise ApiError(403, "FORBIDDEN", "Administrator access is required.")
        return view(*args, **kwargs)

    return wrapped
