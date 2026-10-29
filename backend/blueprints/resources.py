import json

from flask import Blueprint

from .. import db
from ..responses import ApiError, not_implemented, ok

bp = Blueprint("resources", __name__, url_prefix="/api/resources")

TEMPLATE_COLUMNS = """
    ResourceId AS resourceId,
    Title AS title,
    DMAICPhase AS dmaicPhase,
    MinBelt AS minBelt,
    Icon AS icon,
    EstimatedMinutes AS estimatedMinutes,
    Description AS description,
    FieldsJson AS fieldsJson,
    ExampleJson AS exampleJson,
    SortOrder AS sortOrder,
    IsActive AS isActive
"""


def _shape_template(row):
    item = dict(row)
    item["fields"] = json.loads(item.pop("fieldsJson"))
    item["example"] = json.loads(item.pop("exampleJson"))
    item["isActive"] = bool(item["isActive"])
    return item


@bp.get("")
def list_resources():
    rows = db.query_all(
        f"""
        SELECT {TEMPLATE_COLUMNS}
        FROM dbo.Resources
        WHERE IsActive = 1
        ORDER BY SortOrder, Title
        """
    )
    items = [_shape_template(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.get("/copies")
def list_copies():
    not_implemented(4, "Saved resource copies are added in Stage 4.")


@bp.post("/copies")
def create_copy():
    not_implemented(4, "Saving resource copies is added in Stage 4.")


@bp.get("/copies/<int:copy_id>")
def get_copy(copy_id):
    not_implemented(4, "Loading a saved resource copy is added in Stage 4.")


@bp.put("/copies/<int:copy_id>")
def update_copy(copy_id):
    not_implemented(4, "Updating a saved resource copy is added in Stage 4.")


@bp.delete("/copies/<int:copy_id>")
def delete_copy(copy_id):
    not_implemented(4, "Deleting a saved resource copy is added in Stage 4.")


@bp.post("/migrate-local")
def migrate_local_resources():
    not_implemented(2, "Local-storage migration is added in Stage 2.")


@bp.get("/<string:resource_id>")
def get_resource(resource_id):
    row = db.query_one(
        f"""
        SELECT {TEMPLATE_COLUMNS}
        FROM dbo.Resources
        WHERE ResourceId = ? AND IsActive = 1
        """,
        (resource_id,),
    )
    if row is None:
        raise ApiError(404, "RESOURCE_NOT_FOUND", "Resource template not found.")
    return ok(_shape_template(row))
