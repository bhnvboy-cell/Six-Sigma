from __future__ import annotations

import pyodbc
from flask import current_app, g

from .responses import ApiError


def _odbc_value(value):
    text = str(value).replace("}", "}}")
    return "{" + text + "}"


def build_connection_string(config):
    override = config.get("SQL_CONNECTION_STRING")
    if override:
        return override

    parts = [
        f"DRIVER={_odbc_value(config['SQL_DRIVER'])}",
        f"SERVER={_odbc_value(config['SQL_SERVER'])}",
        f"DATABASE={_odbc_value(config['SQL_DATABASE'])}",
    ]

    if config.get("SQL_TRUSTED_CONNECTION"):
        parts.append("Trusted_Connection=yes")
    else:
        parts.append(f"UID={_odbc_value(config['SQL_USER'])}")
        parts.append(f"PWD={_odbc_value(config['SQL_PASSWORD'])}")

    parts.extend(
        [
            f"Encrypt={_odbc_value(config['SQL_ENCRYPT'])}",
            f"TrustServerCertificate={_odbc_value(config['SQL_TRUST_SERVER_CERTIFICATE'])}",
            f"Connection Timeout={int(config['SQL_CONNECT_TIMEOUT'])}",
        ]
    )
    return ";".join(parts) + ";"


def get_connection():
    if "db_connection" not in g:
        try:
            g.db_connection = pyodbc.connect(
                build_connection_string(current_app.config),
                autocommit=False,
            )
        except pyodbc.Error as exc:
            current_app.logger.error("Database connection failed: %s", exc)
            raise ApiError(
                503,
                "DATABASE_UNAVAILABLE",
                "The database is unavailable. Check the SQL Server connection settings.",
            ) from exc
    return g.db_connection


def close_connection(exception=None):
    connection = g.pop("db_connection", None)
    if connection is not None:
        connection.close()


def query_all(sql, params=()):
    connection = get_connection()
    cursor = connection.cursor()
    try:
        cursor.execute(sql, params)
        columns = [column[0] for column in cursor.description]
        return [dict(zip(columns, row)) for row in cursor.fetchall()]
    except pyodbc.Error as exc:
        current_app.logger.error("Database query failed: %s", exc)
        raise ApiError(500, "DATABASE_ERROR", "The database query failed.") from exc
    finally:
        cursor.close()


def query_one(sql, params=()):
    rows = query_all(sql, params)
    return rows[0] if rows else None


def execute(sql, params=()):
    connection = get_connection()
    cursor = connection.cursor()
    try:
        cursor.execute(sql, params)
        connection.commit()
        return cursor.rowcount
    except pyodbc.IntegrityError as exc:
        connection.rollback()
        current_app.logger.warning("Database constraint violation: %s", exc)
        raise ApiError(
            409,
            "CONFLICT",
            "The change conflicts with existing data.",
        ) from exc
    except pyodbc.Error as exc:
        connection.rollback()
        current_app.logger.error("Database write failed: %s", exc)
        raise ApiError(500, "DATABASE_ERROR", "The database write failed.") from exc
    finally:
        cursor.close()


def insert_returning(sql, params=()):
    connection = get_connection()
    cursor = connection.cursor()
    try:
        cursor.execute(sql, params)
        columns = [column[0] for column in cursor.description]
        row = cursor.fetchone()
        connection.commit()
        return dict(zip(columns, row)) if row is not None else None
    except pyodbc.IntegrityError as exc:
        connection.rollback()
        current_app.logger.warning("Database constraint violation: %s", exc)
        raise ApiError(
            409,
            "CONFLICT",
            "The change conflicts with existing data.",
        ) from exc
    except pyodbc.Error as exc:
        connection.rollback()
        current_app.logger.error("Database write failed: %s", exc)
        raise ApiError(500, "DATABASE_ERROR", "The database write failed.") from exc
    finally:
        cursor.close()


def init_app(app):
    app.teardown_appcontext(close_connection)
