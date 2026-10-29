from flask import Blueprint

from ..responses import not_implemented

bp = Blueprint("certificates", __name__, url_prefix="/api/certificates")


@bp.get("")
def list_certificates():
    not_implemented(3, "Learner certificates are added in Stage 3.")


@bp.post("/<string:belt>")
def issue_certificate(belt):
    not_implemented(3, "Certificate issuance is added in Stage 3.")


@bp.get("/verify/<string:verification_id>")
def verify_certificate(verification_id):
    not_implemented(3, "Public certificate verification is added in Stage 3.")
