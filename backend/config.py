import os
import secrets
from datetime import timedelta
from pathlib import Path

from dotenv import load_dotenv

BASE_DIR = Path(__file__).resolve().parent
load_dotenv(BASE_DIR / ".env")


def _env_bool(name, default=False):
    value = os.getenv(name)
    if value is None:
        return default
    return value.strip().lower() in {"1", "true", "yes", "on"}


def _env_list(name, default):
    value = os.getenv(name)
    if not value:
        return default
    return [item.strip() for item in value.split(",") if item.strip()]


class Config:
    SECRET_KEY = os.getenv("FLASK_SECRET_KEY") or secrets.token_hex(32)

    SQL_CONNECTION_STRING = os.getenv("SQL_CONNECTION_STRING", "")
    SQL_DRIVER = os.getenv("SQL_DRIVER", "ODBC Driver 18 for SQL Server")
    SQL_SERVER = os.getenv("SQL_SERVER", r".\SQLEXPRESS")
    SQL_DATABASE = os.getenv("SQL_DATABASE", "LeanSixSigmaTraining")
    SQL_TRUSTED_CONNECTION = _env_bool("SQL_TRUSTED_CONNECTION", True)
    SQL_USER = os.getenv("SQL_USER", "")
    SQL_PASSWORD = os.getenv("SQL_PASSWORD", "")
    SQL_ENCRYPT = os.getenv("SQL_ENCRYPT", "yes")
    SQL_TRUST_SERVER_CERTIFICATE = os.getenv("SQL_TRUST_SERVER_CERTIFICATE", "yes")
    SQL_CONNECT_TIMEOUT = int(os.getenv("SQL_CONNECT_TIMEOUT", "5"))

    TRUST_PROXY_HEADERS = _env_bool("TRUST_PROXY_HEADERS", False)

    FRONTEND_ORIGINS = _env_list(
        "FRONTEND_ORIGINS",
        [
            "http://127.0.0.1:5500",
            "http://localhost:5500",
            "http://127.0.0.1:8080",
            "http://localhost:8080",
        ],
    )

    SESSION_COOKIE_NAME = os.getenv("SESSION_COOKIE_NAME", "lss_session")
    SESSION_COOKIE_HTTPONLY = True
    SESSION_COOKIE_SAMESITE = os.getenv("SESSION_COOKIE_SAMESITE", "Lax")
    SESSION_COOKIE_SECURE = _env_bool("SESSION_COOKIE_SECURE", False)
    PERMANENT_SESSION_LIFETIME = timedelta(hours=int(os.getenv("SESSION_HOURS", "24")))
    BCRYPT_ROUNDS = int(os.getenv("BCRYPT_ROUNDS", "12"))

    EXAM_PASS_PERCENT = float(os.getenv("EXAM_PASS_PERCENT", "80"))
    MAX_CONTENT_LENGTH = int(os.getenv("MAX_UPLOAD_MB", "10")) * 1024 * 1024
    JSON_SORT_KEYS = False
