import re

import bcrypt
from flask import Blueprint, current_app, request

from .. import db, security
from ..responses import ApiError, json_body, ok

bp = Blueprint("auth", __name__, url_prefix="/api/auth")

USERNAME_RE = re.compile(r"^[A-Za-z0-9][A-Za-z0-9_.-]{2,49}$")
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")
DUMMY_HASH = bcrypt.hashpw(b"not-a-real-password", bcrypt.gensalt(rounds=12))


def _clean_text(value, field, label, required=True, maximum=100):
    text = str(value or "").strip()
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


def _password(value):
    password = str(value or "")
    byte_length = len(password.encode("utf-8"))
    if byte_length < 8:
        raise ApiError(
            400,
            "WEAK_PASSWORD",
            "Password must be at least 8 characters.",
            {"field": "password"},
        )
    if byte_length > 72:
        raise ApiError(
            400,
            "WEAK_PASSWORD",
            "Password must be 72 bytes or fewer.",
            {"field": "password"},
        )
    return password


def _hash_password(password):
    rounds = int(current_app.config["BCRYPT_ROUNDS"])
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt(rounds=rounds)).decode("ascii")


def _client_ip():
    if current_app.config.get("TRUST_PROXY_HEADERS"):
        forwarded = request.headers.get("X-Forwarded-For", "")
        if forwarded:
            return forwarded.split(",")[0].strip()[:64]
    return (request.remote_addr or "")[:64]


def _record_login_attempt(identifier, success, user_id=None):
    try:
        db.execute(
            """
            INSERT INTO dbo.LoginAudit
                (UserId, Username, IpAddress, UserAgent, Success)
            VALUES (?, ?, ?, ?, ?)
            """,
            (
                user_id,
                str(identifier or "")[:100],
                _client_ip(),
                (request.headers.get("User-Agent") or "")[:512],
                1 if success else 0,
            ),
        )
    except Exception as exc:  # audit failures must never block sign-in
        current_app.logger.warning("Login audit could not be recorded: %s", exc)


@bp.post("/register")
def register():
    payload = json_body()

    username = _clean_text(payload.get("username"), "username", "Username", maximum=50).lower()
    email = _clean_text(payload.get("email"), "email", "Email", maximum=100).lower()
    first_name = _clean_text(payload.get("firstName"), "firstName", "First name", maximum=50)
    last_name = _clean_text(
        payload.get("lastName"),
        "lastName",
        "Last name",
        required=False,
        maximum=50,
    )
    password = _password(payload.get("password"))
    belt_level = "white"

    if not USERNAME_RE.match(username):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "Username must be 3-50 characters using letters, numbers, dots, dashes, or underscores.",
            {"field": "username"},
        )
    if not EMAIL_RE.match(email):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "Enter a valid email address.",
            {"field": "email"},
        )

    existing = db.query_one(
        """
        SELECT UserId AS userId, Username AS username, Email AS email
        FROM dbo.Users
        WHERE Username = ? OR Email = ?
        """,
        (username, email),
    )
    if existing is not None:
        field = "username" if existing["username"].lower() == username else "email"
        raise ApiError(
            409,
            "ACCOUNT_EXISTS",
            f"That {field} is already registered.",
            {"field": field},
        )

    password_hash = _hash_password(password)
    created = db.insert_returning(
        """
        INSERT INTO dbo.Users
            (Username, Email, PasswordHash, FirstName, LastName, BeltLevel, [Role])
        OUTPUT INSERTED.UserId AS userId
        VALUES (?, ?, ?, ?, ?, ?, N'learner')
        """,
        (username, email, password_hash, first_name, last_name, belt_level),
    )
    user = security.user_by_id(created["userId"])
    security.start_session(user["userId"])
    return ok({"user": user}, status=201)


@bp.post("/login")
def login():
    payload = json_body()
    identifier = _clean_text(
        payload.get("username") or payload.get("email"),
        "username",
        "Username or email",
        maximum=100,
    ).lower()
    password = str(payload.get("password") or "")

    row = db.query_one(
        f"""
        SELECT {security.USER_COLUMNS}, PasswordHash AS passwordHash
        FROM dbo.Users
        WHERE Username = ? OR Email = ?
        """,
        (identifier, identifier),
    )

    stored_hash = row["passwordHash"] if row is not None else DUMMY_HASH.decode("ascii")
    try:
        valid = bcrypt.checkpw(password.encode("utf-8"), stored_hash.encode("ascii"))
    except ValueError:
        valid = False

    if row is None or not valid or not bool(row["isActive"]):
        _record_login_attempt(identifier, False, row["userId"] if row is not None else None)
        raise ApiError(401, "INVALID_CREDENTIALS", "Invalid username/email or password.")

    _record_login_attempt(identifier, True, row["userId"])
    db.execute(
        "UPDATE dbo.Users SET LastLogin = SYSUTCDATETIME() WHERE UserId = ?",
        (row["userId"],),
    )
    security.start_session(row["userId"])
    user = security.user_by_id(row["userId"])
    return ok({"user": user})


@bp.post("/logout")
def logout():
    security.end_session()
    return "", 204


@bp.get("/me")
@security.login_required
def current_user():
    return ok({"user": security.current_user()})
