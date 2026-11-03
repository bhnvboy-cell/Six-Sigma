"""Create or reset training accounts.

Usage:
    py backend/seed_training_users.py

Defaults create user1..user30 with passwords abhinav@1..abhinav@30 and an
administrator account with a randomly generated password. Passwords are
bcrypt-hashed with the BCRYPT_ROUNDS configured for the API. Re-running resets
the passwords of existing accounts without deleting learner progress.
"""

import argparse
import secrets
import sys
from pathlib import Path

import bcrypt

PROJECT_ROOT = Path(__file__).resolve().parent.parent
if str(PROJECT_ROOT) not in sys.path:
    sys.path.insert(0, str(PROJECT_ROOT))

from backend import create_app, db


def _hash_password(password, rounds):
    return bcrypt.hashpw(
        password.encode("utf-8"),
        bcrypt.gensalt(rounds=rounds),
    ).decode("ascii")


def _upsert_user(username, email, password, first_name, last_name, role, rounds):
    password_hash = _hash_password(password, rounds)
    existing = db.query_one(
        "SELECT UserId AS userId FROM dbo.Users WHERE Username = ?",
        (username,),
    )
    if existing is not None:
        db.execute(
            """
            UPDATE dbo.Users
            SET Email = ?, PasswordHash = ?, FirstName = ?, LastName = ?,
                [Role] = ?, IsActive = 1
            WHERE UserId = ?
            """,
            (email, password_hash, first_name, last_name, role, existing["userId"]),
        )
        return existing["userId"], "updated"

    email_owner = db.query_one(
        "SELECT UserId AS userId FROM dbo.Users WHERE Email = ?",
        (email,),
    )
    if email_owner is not None:
        raise RuntimeError(
            f"Email {email} already belongs to another account (UserId {email_owner['userId']})."
        )

    created = db.insert_returning(
        """
        INSERT INTO dbo.Users
            (Username, Email, PasswordHash, FirstName, LastName, BeltLevel, [Role], IsActive)
        OUTPUT INSERTED.UserId AS userId
        VALUES (?, ?, ?, ?, ?, N'white', ?, 1)
        """,
        (username, email, password_hash, first_name, last_name, role),
    )
    return created["userId"], "created"


def _print_table(rows):
    headers = ("Username", "Password", "Role", "UserId", "Action")
    widths = [max(len(str(row[index])) for row in rows + [headers]) for index in range(5)]
    line = "  ".join(str(headers[index]).ljust(widths[index]) for index in range(5))
    print(line)
    print("-" * len(line))
    for row in rows:
        print("  ".join(str(row[index]).ljust(widths[index]) for index in range(5)))


def main():
    parser = argparse.ArgumentParser(description="Seed Lean Six Sigma training accounts.")
    parser.add_argument("--count", type=int, default=30, help="Number of learner accounts (default 30).")
    parser.add_argument("--prefix", default="user", help="Username prefix (default user).")
    parser.add_argument("--password-prefix", default="abhinav@", help="Password prefix (default abhinav@).")
    parser.add_argument("--email-domain", default="training.local", help="Email domain (default training.local).")
    parser.add_argument("--admin-username", default="admin", help="Administrator username (default admin).")
    parser.add_argument("--admin-password", default=None, help="Administrator password (default: randomly generated).")
    parser.add_argument("--no-admin", action="store_true", help="Do not create the administrator account.")
    args = parser.parse_args()

    if args.count < 1:
        parser.error("--count must be at least 1.")

    generated_admin_password = False
    if not args.no_admin and not args.admin_password:
        args.admin_password = secrets.token_urlsafe(12)
        generated_admin_password = True

    app = create_app()
    with app.app_context():
        rounds = int(app.config["BCRYPT_ROUNDS"])
        rows = []

        for index in range(1, args.count + 1):
            username = f"{args.prefix}{index}".lower()
            password = f"{args.password_prefix}{index}"
            email = f"{username}@{args.email_domain}"
            user_id, action = _upsert_user(
                username,
                email,
                password,
                "Training",
                f"User {index}",
                "learner",
                rounds,
            )
            rows.append((username, password, "learner", user_id, action))

        if not args.no_admin:
            user_id, action = _upsert_user(
                args.admin_username.lower(),
                f"{args.admin_username.lower()}@{args.email_domain}",
                args.admin_password,
                "Training",
                "Administrator",
                "admin",
                rounds,
            )
            rows.append((args.admin_username.lower(), args.admin_password, "admin", user_id, action))

        _print_table(rows)
        print()
        if generated_admin_password:
            print("A random administrator password was generated. Store it securely.")
        print(f"Done. {len(rows)} account(s) ready.")
        if not args.no_admin:
            print("Open html/admin.html after signing in as the administrator.")


if __name__ == "__main__":
    main()
