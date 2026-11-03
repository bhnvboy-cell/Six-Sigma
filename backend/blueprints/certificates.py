import secrets
from datetime import datetime, timezone

from flask import Blueprint

from .. import db, security
from ..responses import ApiError, ok

bp = Blueprint("certificates", __name__, url_prefix="/api/certificates")

BELT_CODES = {
    "white": "WB",
    "yellow": "YB",
    "green": "GB",
    "black": "BB",
    "master-black": "MBB",
}

CERTIFICATE_COLUMNS = """
    CertificateId AS certificateId,
    BeltLevel AS beltLevel,
    ExamAttemptId AS examAttemptId,
    LearnerName AS learnerName,
    VerificationId AS verificationId,
    CertificateNumber AS certificateNumber,
    IssuedAt AS issuedAt,
    ExpiresAt AS expiresAt,
    IsRevoked AS isRevoked
"""


def _belt(value):
    normalized = str(value or "").strip().lower()
    if normalized not in security.BELT_LEVELS:
        raise ApiError(404, "CERTIFICATE_NOT_FOUND", "Belt certificate not found.")
    return normalized


def _shape(row):
    if row is None:
        return None
    item = dict(row)
    item["isRevoked"] = bool(item.get("isRevoked"))
    return item


def _learner_name(user):
    name = " ".join(
        part for part in [user.get("firstName") or "", user.get("lastName") or ""] if part
    ).strip()
    return name or user.get("username") or "Lean Six Sigma Learner"


def _active_certificate(user_id, belt):
    row = db.query_one(
        f"""
        SELECT TOP (1) {CERTIFICATE_COLUMNS}
        FROM dbo.Certificates
        WHERE UserId = ? AND BeltLevel = ? AND IsRevoked = 0
        ORDER BY IssuedAt DESC, CertificateId DESC
        """,
        (user_id, belt),
    )
    return _shape(row)


def _new_verification_id():
    for _ in range(5):
        value = secrets.token_hex(6)
        existing = db.query_one(
            "SELECT 1 AS found FROM dbo.Certificates WHERE VerificationId = ?",
            (value,),
        )
        if existing is None:
            return value
    raise ApiError(
        500,
        "CERTIFICATE_ID_FAILED",
        "A certificate verification ID could not be generated.",
    )


@bp.get("")
@security.login_required
def list_certificates():
    user = security.current_user()
    rows = db.query_all(
        f"""
        SELECT {CERTIFICATE_COLUMNS}
        FROM dbo.Certificates
        WHERE UserId = ?
        ORDER BY IssuedAt DESC, CertificateId DESC
        """,
        (user["userId"],),
    )
    items = [_shape(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.post("/<string:belt>")
@security.login_required
def issue_certificate(belt):
    user = security.current_user()
    belt = _belt(belt)

    existing = _active_certificate(user["userId"], belt)
    if existing is not None:
        return ok(existing, meta={"created": False})

    attempt = db.query_one(
        """
        SELECT TOP (1)
            ExamAttemptId AS examAttemptId,
            Score AS score
        FROM dbo.ExamAttempts
        WHERE UserId = ? AND BeltLevel = ? AND Passed = 1
        ORDER BY Score DESC, CompletedAt DESC, ExamAttemptId DESC
        """,
        (user["userId"], belt),
    )
    if attempt is None:
        raise ApiError(
            403,
            "EXAM_NOT_PASSED",
            "Pass this belt exam before requesting a certificate.",
            {"beltLevel": belt},
        )

    verification_id = _new_verification_id()
    certificate_number = "LSS-{0}-{1}-{2}".format(
        BELT_CODES[belt],
        datetime.now(timezone.utc).year,
        verification_id[:6].upper(),
    )

    created = db.insert_returning(
        f"""
        INSERT INTO dbo.Certificates
            (UserId, BeltLevel, ExamAttemptId, LearnerName, VerificationId,
             CertificateNumber, IssuedAt)
        OUTPUT INSERTED.CertificateId AS certificateId
        VALUES (?, ?, ?, ?, ?, ?, SYSUTCDATETIME())
        """,
        (
            user["userId"],
            belt,
            attempt["examAttemptId"],
            _learner_name(user),
            verification_id,
            certificate_number,
        ),
    )

    row = db.query_one(
        f"SELECT {CERTIFICATE_COLUMNS} FROM dbo.Certificates WHERE CertificateId = ?",
        (created["certificateId"],),
    )
    return ok(_shape(row), status=201, meta={"created": True})


@bp.get("/verify/<string:verification_id>")
def verify_certificate(verification_id):
    code = str(verification_id or "").strip()
    if not code:
        raise ApiError(404, "CERTIFICATE_NOT_FOUND", "Certificate not found.")
    row = db.query_one(
        f"""
        SELECT {CERTIFICATE_COLUMNS}
        FROM dbo.Certificates
        WHERE VerificationId = ?
        """,
        (code,),
    )
    if row is None:
        raise ApiError(404, "CERTIFICATE_NOT_FOUND", "Certificate not found.")
    item = _shape(row)
    return ok(
        {
            "valid": not item["isRevoked"],
            "learnerName": item["learnerName"],
            "beltLevel": item["beltLevel"],
            "certificateNumber": item["certificateNumber"],
            "verificationId": item["verificationId"],
            "issuedAt": item["issuedAt"],
            "isRevoked": item["isRevoked"],
        }
    )
