import base64
from datetime import date, datetime, time
from decimal import Decimal
from uuid import UUID

from flask import Flask, jsonify
from flask.json.provider import DefaultJSONProvider
from flask_cors import CORS

from . import db
from .config import Config
from .responses import not_implemented, ok, register_error_handlers


class ApiJSONProvider(DefaultJSONProvider):
    def default(self, obj):
        if isinstance(obj, (datetime, date, time)):
            return obj.isoformat()
        if isinstance(obj, Decimal):
            return str(obj)
        if isinstance(obj, UUID):
            return str(obj)
        if isinstance(obj, bytes):
            return base64.b64encode(obj).decode("ascii")
        return super().default(obj)


def create_app(test_config=None):
    app = Flask(__name__)
    app.config.from_object(Config)
    if test_config:
        app.config.update(test_config)

    app.json = ApiJSONProvider(app)
    app.json.sort_keys = False

    origins = app.config["FRONTEND_ORIGINS"]
    if isinstance(origins, str):
        origins = [item.strip() for item in origins.split(",") if item.strip()]
    CORS(
        app,
        resources={r"/api/*": {"origins": origins}},
        supports_credentials=True,
        allow_headers=["Content-Type", "Authorization"],
        methods=["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    )

    db.init_app(app)
    register_error_handlers(app)

    from .blueprints import register_blueprints

    register_blueprints(app)

    @app.get("/")
    def root():
        return jsonify(
            {
                "service": "Lean Six Sigma API",
                "stage": 1,
                "documentation": "backend/API.md",
                "health": "/api/health",
            }
        )

    @app.get("/api")
    def api_index():
        return ok(
            {
                "service": "Lean Six Sigma API",
                "stage": 1,
                "blueprints": [
                    "auth",
                    "progress",
                    "resources",
                    "exams",
                    "certificates",
                    "admin",
                ],
            }
        )

    @app.get("/api/health")
    def health():
        return ok({"status": "ok", "service": "Lean Six Sigma API", "stage": 1})

    @app.get("/api/health/db")
    def database_health():
        row = db.query_one(
            "SELECT DB_NAME() AS databaseName, SYSUTCDATETIME() AS serverTime"
        )
        return ok({"status": "ok", **row})

    @app.get("/api/stage-1")
    def stage_one_notice():
        not_implemented(2, "Stage 1 is active. Authentication begins in Stage 2.")

    @app.after_request
    def add_api_headers(response):
        if response.content_type and response.content_type.startswith("application/json"):
            response.headers["X-Content-Type-Options"] = "nosniff"
        return response

    return app
