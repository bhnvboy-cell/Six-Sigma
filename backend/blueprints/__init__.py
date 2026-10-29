BLUEPRINTS = (
    "auth",
    "progress",
    "resources",
    "exams",
    "certificates",
    "admin",
)


def register_blueprints(app):
    from importlib import import_module

    for name in BLUEPRINTS:
        module = import_module(f".{name}", __name__)
        app.register_blueprint(module.bp)
