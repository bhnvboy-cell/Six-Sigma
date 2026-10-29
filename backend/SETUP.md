# Flask Backend Setup

This guide installs the Stage 1 Python backend on Windows and connects it to SQL
Server Express. The static website still works without the API and keeps using
`localStorage` as its offline demo mode.

## 1. Install the prerequisites

### Python

Install Python 3.10 or newer from <https://www.python.org/downloads/windows/>.
During installation, enable **Add Python to PATH**.

Check the launcher:

```powershell
py --version
py -m pip --version
```

If the `python` command opens the Microsoft Store instead of running Python, use
`py` for every command in this guide.

### SQL Server Express

Install SQL Server Express with the default named instance, `SQLEXPRESS`. Install
SQL Server Management Studio (SSMS) if you want a graphical database client.

Check the instance:

```powershell
sqlcmd -S ".\SQLEXPRESS" -Q "SELECT @@VERSION;" -b
```

### Microsoft ODBC Driver

Install **Microsoft ODBC Driver 18 for SQL Server**. Then confirm that Python can
see it:

```powershell
py -c "import pyodbc; print(pyodbc.drivers())"
```

The list must include `ODBC Driver 18 for SQL Server`. If it does not, install
the driver and reopen the terminal.

## 2. Create and migrate the database

Run these commands from the repository root, not from `backend/`.

```powershell
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\schema.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\001_backend_foundation.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_modules.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_resources.sql -b
```

For an existing database, do not rerun `schema.sql` or the generated seed files.
Run only the migrations that have not been applied:

```powershell
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -i sql\migrations\001_backend_foundation.sql -b
```

The migration is additive and safe to rerun. See `sql/migrations/README.md` for
verification queries.

## 3. Install the Python packages

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
py -m pip install --upgrade pip
py -m pip install -r backend\requirements.txt
```

If PowerShell blocks the activation script, run this once in the same terminal:

```powershell
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

## 4. Configure environment variables

Create your local environment file:

```powershell
Copy-Item backend\.env.example backend\.env
```

Generate a secret key:

```powershell
py -c "import secrets; print(secrets.token_hex(32))"
```

Open `backend/.env` and replace `FLASK_SECRET_KEY` with the generated value.
Never commit `.env` or paste a real password into source code.

Default local SQL Server settings:

```dotenv
SQL_DRIVER=ODBC Driver 18 for SQL Server
SQL_SERVER=.\SQLEXPRESS
SQL_DATABASE=LeanSixSigmaTraining
SQL_TRUSTED_CONNECTION=yes
SQL_ENCRYPT=yes
SQL_TRUST_SERVER_CERTIFICATE=yes
```

For SQL Server authentication, set `SQL_TRUSTED_CONNECTION=no` and provide
`SQL_USER` and `SQL_PASSWORD`. SQL Server must have mixed-mode authentication
enabled for SQL logins.

## 5. Start the API

```powershell
py backend\run.py
```

The default address is <http://127.0.0.1:5000>. To change it, edit `API_HOST` and
`API_PORT` in `backend/.env`.

Alternative Flask CLI start:

```powershell
py -m flask --app backend.run run --host 127.0.0.1 --port 5000
```

## 6. Verify the API

In a second terminal:

```powershell
Invoke-RestMethod http://127.0.0.1:5000/api/health
Invoke-RestMethod http://127.0.0.1:5000/api/health/db
Invoke-RestMethod http://127.0.0.1:5000/api/resources
```

Expected health response:

```json
{
  "data": {
    "status": "ok",
    "service": "Lean Six Sigma API",
    "stage": 1
  }
}
```

`/api/health/db` must return the database name and server time. If it returns
HTTP `503`, fix the database connection before continuing.

## 7. Serve the frontend

In another terminal from the repository root:

```powershell
py -m http.server 5500 --directory html
```

Open <http://127.0.0.1:5500>. The current frontend continues to use
`localStorage`. API integration and offline fallback are added in Stage 2.

The backend allows these development origins by default:

- `http://127.0.0.1:5500`
- `http://localhost:5500`
- `http://127.0.0.1:8080`
- `http://localhost:8080`

Add another origin to `FRONTEND_ORIGINS` in `backend/.env` if needed. Separate
origins with commas.

## 8. Troubleshooting

### `python` opens the Microsoft Store

Use `py` instead of `python`, or disable the App Execution Alias in Windows
Settings.

### `IM002` or "Data source name not found"

The ODBC driver is missing or the driver name is wrong. Run:

```powershell
py -c "import pyodbc; print(pyodbc.drivers())"
```

Set `SQL_DRIVER` to the exact name printed by that command.

### Login failed for SQL Server

- For Windows authentication, use `SQL_TRUSTED_CONNECTION=yes`.
- For SQL authentication, use `SQL_TRUSTED_CONNECTION=no`, set both credentials,
  and enable mixed-mode authentication in SQL Server.
- Confirm the `SQLEXPRESS` service is running.

### SSL or certificate error

For a local SQL Server Express instance, keep:

```dotenv
SQL_ENCRYPT=yes
SQL_TRUST_SERVER_CERTIFICATE=yes
```

Do not use `TrustServerCertificate=yes` in production without reviewing your
certificate setup.

### HTTP `501 Not Implemented`

This is expected in Stage 1 for authentication, progress, exams, certificates,
saved copies, and admin routes. The route contract is documented in `API.md`.

### Port 5000 is already in use

Change `API_PORT` in `backend/.env`, or stop the process using port 5000:

```powershell
Get-NetTCPConnection -LocalPort 5000
```

## Useful Files

- `backend/run.py` - application entry point
- `backend/config.py` - environment and database settings
- `backend/db.py` - pyodbc connection and parameterized query helpers
- `backend/blueprints/` - auth, progress, resources, exams, certificates, admin
- `backend/API.md` - endpoint examples and response contracts
- `sql/migrations/001_backend_foundation.sql` - additive Stage 1 migration
