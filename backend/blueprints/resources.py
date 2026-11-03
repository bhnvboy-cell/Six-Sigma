import json
import uuid

from flask import Blueprint

from .. import db, security
from ..responses import ApiError, json_body, ok

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

COPY_COLUMNS = """
    UserResourceId AS userResourceId,
    ClientId AS clientId,
    ResourceId AS resourceId,
    CopyName AS copyName,
    ProjectName AS projectName,
    Status AS status,
    DataJson AS dataJson,
    CreatedAt AS createdAt,
    UpdatedAt AS updatedAt
"""

COPY_STATUSES = ("Draft", "In Progress", "Complete")


def _shape_template(row):
    item = dict(row)
    item["fields"] = json.loads(item.pop("fieldsJson"))
    item["example"] = json.loads(item.pop("exampleJson"))
    item["isActive"] = bool(item["isActive"])
    return item


def _shape_copy(row):
    item = dict(row)
    item["data"] = json.loads(item.pop("dataJson"))
    return item


def _text(value, field, label, required=True, maximum=200):
    text = str(value if value is not None else "").strip()
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


def _client_id(value, required=False):
    if value is None or str(value).strip() == "":
        if required:
            raise ApiError(400, "VALIDATION_ERROR", "clientId is required.", {"field": "clientId"})
        return None
    text = str(value).strip()
    if len(text) > 64:
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "clientId must be 64 characters or fewer.",
            {"field": "clientId"},
        )
    return text


def _status(value, default="Draft"):
    normalized = str(value or default).strip().lower()
    for allowed in COPY_STATUSES:
        if allowed.lower() == normalized:
            return allowed
    raise ApiError(
        400,
        "INVALID_STATUS",
        "Status must be Draft, In Progress, or Complete.",
        {"field": "status"},
    )


def _data(value, required=True):
    if value is None:
        if required:
            raise ApiError(400, "VALIDATION_ERROR", "data is required.", {"field": "data"})
        return None
    if not isinstance(value, dict):
        raise ApiError(
            400,
            "VALIDATION_ERROR",
            "data must be a JSON object.",
            {"field": "data"},
        )
    return value


def _resource(resource_id):
    row = db.query_one(
        "SELECT ResourceId AS resourceId FROM dbo.Resources WHERE ResourceId = ? AND IsActive = 1",
        (resource_id,),
    )
    if row is None:
        raise ApiError(404, "RESOURCE_NOT_FOUND", "Resource template not found.")
    return row["resourceId"]


def _copy_row(user_id, copy_id=None, client_id=None):
    if copy_id is not None:
        row = db.query_one(
            f"""
            SELECT {COPY_COLUMNS}
            FROM dbo.UserResources
            WHERE UserResourceId = ? AND UserId = ?
            """,
            (copy_id, user_id),
        )
    else:
        row = db.query_one(
            f"""
            SELECT {COPY_COLUMNS}
            FROM dbo.UserResources
            WHERE ClientId = ? AND UserId = ?
            """,
            (client_id, user_id),
        )
    return _shape_copy(row) if row is not None else None


def _create_copy(user_id, payload):
    resource_id = _resource(
        _text(payload.get("resourceId"), "resourceId", "Resource", maximum=50)
    )
    copy_name = _text(payload.get("copyName"), "copyName", "Copy name", maximum=200)
    project_name = _text(
        payload.get("projectName"),
        "projectName",
        "Project name",
        required=False,
        maximum=200,
    )
    status = _status(payload.get("status"))
    data = _data(payload.get("data"))
    client_id = _client_id(payload.get("clientId"), required=False) or uuid.uuid4().hex

    existing = _copy_row(user_id, client_id=client_id)
    if existing is not None:
        return existing, False

    created = db.insert_returning(
        """
        INSERT INTO dbo.UserResources
            (UserId, ResourceId, ClientId, CopyName, ProjectName, Status, DataJson)
        OUTPUT INSERTED.UserResourceId AS userResourceId
        VALUES (?, ?, ?, ?, ?, ?, ?)
        """,
        (
            user_id,
            resource_id,
            client_id,
            copy_name,
            project_name,
            status,
            json.dumps(data, ensure_ascii=False),
        ),
    )
    return _copy_row(user_id, copy_id=created["userResourceId"]), True


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
@security.login_required
def list_copies():
    user = security.current_user()
    rows = db.query_all(
        f"""
        SELECT {COPY_COLUMNS}
        FROM dbo.UserResources
        WHERE UserId = ?
        ORDER BY UpdatedAt DESC, UserResourceId DESC
        """,
        (user["userId"],),
    )
    items = [_shape_copy(row) for row in rows]
    return ok(items, meta={"count": len(items)})


@bp.post("/copies")
@security.login_required
def create_copy():
    user = security.current_user()
    item, created = _create_copy(user["userId"], json_body())
    return ok(item, status=201 if created else 200, meta={"created": created})


@bp.get("/copies/<int:copy_id>")
@security.login_required
def get_copy(copy_id):
    user = security.current_user()
    item = _copy_row(user["userId"], copy_id=copy_id)
    if item is None:
        raise ApiError(404, "COPY_NOT_FOUND", "Saved resource copy not found.")
    return ok(item)


@bp.put("/copies/<int:copy_id>")
@security.login_required
def update_copy(copy_id):
    user = security.current_user()
    existing = _copy_row(user["userId"], copy_id=copy_id)
    if existing is None:
        raise ApiError(404, "COPY_NOT_FOUND", "Saved resource copy not found.")

    payload = json_body()
    resource_id = (
        _resource(
            _text(payload.get("resourceId"), "resourceId", "Resource", maximum=50)
        )
        if "resourceId" in payload
        else existing["resourceId"]
    )
    copy_name = (
        _text(payload.get("copyName"), "copyName", "Copy name", maximum=200)
        if "copyName" in payload
        else existing["copyName"]
    )
    project_name = (
        _text(
            payload.get("projectName"),
            "projectName",
            "Project name",
            required=False,
            maximum=200,
        )
        if "projectName" in payload
        else existing["projectName"]
    )
    status = _status(payload.get("status")) if "status" in payload else existing["status"]
    data = _data(payload.get("data")) if "data" in payload else existing["data"]

    db.execute(
        """
        UPDATE dbo.UserResources
        SET ResourceId = ?,
            CopyName = ?,
            ProjectName = ?,
            Status = ?,
            DataJson = ?,
            UpdatedAt = SYSUTCDATETIME()
        WHERE UserResourceId = ? AND UserId = ?
        """,
        (
            resource_id,
            copy_name,
            project_name,
            status,
            json.dumps(data, ensure_ascii=False),
            copy_id,
            user["userId"],
        ),
    )
    return ok(_copy_row(user["userId"], copy_id=copy_id))


@bp.delete("/copies/<int:copy_id>")
@security.login_required
def delete_copy(copy_id):
    user = security.current_user()
    deleted = db.execute(
        "DELETE FROM dbo.UserResources WHERE UserResourceId = ? AND UserId = ?",
        (copy_id, user["userId"]),
    )
    if deleted == 0:
        raise ApiError(404, "COPY_NOT_FOUND", "Saved resource copy not found.")
    return "", 204


@bp.post("/migrate-local")
@security.login_required
def migrate_local_resources():
    user = security.current_user()
    payload = json_body()
    resources = payload.get("resources") or []
    if not isinstance(resources, list):
        raise ApiError(400, "VALIDATION_ERROR", "resources must be an array.")
    if len(resources) > 200:
        raise ApiError(400, "VALIDATION_ERROR", "Too many saved copies to migrate.")

    imported = []
    skipped = []
    for index, item in enumerate(resources):
        if not isinstance(item, dict):
            skipped.append({"index": index, "reason": "Entry is not an object."})
            continue
        migration_item = dict(item)
        migration_item["clientId"] = item.get("clientId") or item.get("id")
        try:
            copy, created = _create_copy(user["userId"], migration_item)
            imported.append({"copy": copy, "created": created, "localId": migration_item["clientId"]})
        except ApiError as exc:
            skipped.append({"index": index, "reason": exc.message})

    return ok(
        {
            "imported": imported,
            "skipped": skipped,
            "importedCount": sum(1 for item in imported if item["created"]),
            "existingCount": sum(1 for item in imported if not item["created"]),
        }
    )


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
