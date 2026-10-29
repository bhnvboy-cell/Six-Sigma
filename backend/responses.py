from flask import jsonify, request


class ApiError(Exception):
    def __init__(self, status_code, code, message, details=None):
        super().__init__(message)
        self.status_code = status_code
        self.code = code
        self.message = message
        self.details = details


def ok(data=None, status=200, meta=None):
    body = {"data": data}
    if meta is not None:
        body["meta"] = meta
    return jsonify(body), status


def error(status, code, message, details=None):
    payload = {"error": {"code": code, "message": message}}
    if details is not None:
        payload["error"]["details"] = details
    return jsonify(payload), status


def not_implemented(stage, message):
    raise ApiError(
        501,
        "NOT_IMPLEMENTED",
        message,
        {"plannedStage": stage},
    )


def register_error_handlers(app):
    @app.errorhandler(ApiError)
    def handle_api_error(exc):
        return error(exc.status_code, exc.code, exc.message, exc.details)

    @app.errorhandler(404)
    def handle_not_found(exc):
        if request.path.startswith("/api/"):
            return error(404, "NOT_FOUND", "The requested API endpoint was not found.")
        return exc

    @app.errorhandler(405)
    def handle_method_not_allowed(exc):
        if request.path.startswith("/api/"):
            return error(
                405,
                "METHOD_NOT_ALLOWED",
                "The requested HTTP method is not allowed for this endpoint.",
            )
        return exc

    @app.errorhandler(500)
    def handle_unexpected_error(exc):
        if request.path.startswith("/api/"):
            app.logger.exception("Unhandled API error")
            return error(500, "INTERNAL_ERROR", "An unexpected server error occurred.")
        return exc
