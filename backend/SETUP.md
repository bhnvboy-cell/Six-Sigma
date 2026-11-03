# Flask Backend Setup

This guide installs the Stage 4 Python backend on Windows and connects it to SQL
Server Express. Stage 4 adds bcrypt authentication, server-side sessions, lesson
progress, saved project copies, server-scored belt exams, exam-based belt
promotion, certificates, and administrator curriculum, template, glossary,
learner, and reporting routes. The static website still works without the API and
falls back to `localStorage` as its offline demo mode.

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
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\002_user_resource_client_ids.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\003_admin_glossary.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\004_login_audit.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_modules.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_resources.sql -b
```

For an existing database, do not rerun `schema.sql` or the generated seed files.
Run only the migrations that have not been applied:

```powershell
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -i sql\migrations\001_backend_foundation.sql -b
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -i sql\migrations\002_user_resource_client_ids.sql -b
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -i sql\migrations\003_admin_glossary.sql -b
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -i sql\migrations\004_login_audit.sql -b
```

The migrations are additive and safe to rerun. See `sql/migrations/README.md` for
verification queries.

### Create the training accounts

After the migrations, create the training logins. The script is repeat-safe: it
creates missing accounts and resets the passwords of existing ones without
deleting learner progress.

```powershell
py backend\seed_training_users.py
```

By default it creates `user1`..`user30` with passwords `abhinav@1`..`abhinav@30`
and an administrator account `admin` with a randomly generated password. Use
`--admin-password` to set a specific password, or `--help` to change the count,
prefix, password pattern, or email domain. Passwords are stored as bcrypt
hashes.

Sign in as the administrator and open `html/admin.html` to see every learner,
exam mark, and sign-in attempt. Learners who share one IP address are separated
by username in the sign-in audit.

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

Session, password, and exam settings (defaults shown):

```dotenv
SESSION_COOKIE_NAME=lss_session
SESSION_COOKIE_SECURE=no
SESSION_COOKIE_SAMESITE=Lax
SESSION_HOURS=24
BCRYPT_ROUNDS=12
EXAM_PASS_PERCENT=80
```

`EXAM_PASS_PERCENT` must stay aligned with the passing scores in
`data/curriculum.json`; the current curriculum uses `80`.

Keep `SESSION_COOKIE_SECURE=no` only for local HTTP development. Set it to `yes`
when the API is served over HTTPS.

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
    "stage": 4
  }
}
```

`/api/health/db` must return the database name and server time. If it returns
HTTP `503`, fix the database connection before continuing.

Verify registration, login, and progress with a cookie-aware session:

```powershell
$body = @{
    username = "jordan.lee"
    email = "jordan@example.com"
    password = "long-password"
    firstName = "Jordan"
} | ConvertTo-Json
Invoke-RestMethod http://127.0.0.1:5000/api/auth/register -Method Post -ContentType "application/json" -Body $body -SessionVariable session
Invoke-RestMethod http://127.0.0.1:5000/api/auth/me -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/progress -WebSession $session
```

If the username or email already exists, sign in instead:

```powershell
$login = @{ username = "jordan.lee"; password = "long-password" } | ConvertTo-Json
Invoke-RestMethod http://127.0.0.1:5000/api/auth/login -Method Post -ContentType "application/json" -Body $login -SessionVariable session
```

Verify the Stage 3 exam flow. This submits an all-`A` attempt, which is expected
to score low:

```powershell
Invoke-RestMethod http://127.0.0.1:5000/api/exams -WebSession $session
$exam = Invoke-RestMethod http://127.0.0.1:5000/api/exams/white -WebSession $session
$answers = @{}
$exam.data.questions | ForEach-Object { $answers[$_.questionId] = "A" }
$attempt = @{
    answers = $answers
    startedAt = (Get-Date).ToUniversalTime().ToString("o")
} | ConvertTo-Json -Depth 5
Invoke-RestMethod http://127.0.0.1:5000/api/exams/white/attempts -Method Post -ContentType "application/json" -Body $attempt -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/exams/white/attempts -WebSession $session
```

`POST /api/certificates/white` returns HTTP `403` until a passing attempt exists.
After passing, issue the certificate and verify it without a session:

```powershell
$certificate = Invoke-RestMethod http://127.0.0.1:5000/api/certificates/white -Method Post -WebSession $session
Invoke-RestMethod ("http://127.0.0.1:5000/api/certificates/verify/" + $certificate.data.verificationId)
```

To test administrator routes, promote the test account in SQL Server and reuse
the same session:

```powershell
sqlcmd -S ".\SQLEXPRESS" -d LeanSixSigmaTraining -Q "UPDATE dbo.Users SET [Role] = N'admin' WHERE Username = N'jordan.lee';" -b
Invoke-RestMethod http://127.0.0.1:5000/api/admin/learners -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/admin/exam-results -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/admin/login-audit -WebSession $session
Invoke-RestMethod http://127.0.0.1:5000/api/admin/export/learners.csv -WebSession $session -OutFile learners.csv
Invoke-RestMethod http://127.0.0.1:5000/api/admin/export/exam-results.csv -WebSession $session -OutFile exam-results.csv
Invoke-RestMethod http://127.0.0.1:5000/api/admin/export/login-audit.csv -WebSession $session -OutFile login-audit.csv
```

`GET /api/admin/lessons` returns HTTP `403` for learner accounts. Curriculum
imports can be checked without writing with
`"mode":"validate"` before applying.

## 7. Serve the frontend

In another terminal from the repository root:

```powershell
py -m http.server 5500 --directory html
```

Open <http://127.0.0.1:5500>. The frontend uses the API when it is reachable and
falls back to `localStorage` when it is not. Sign in or create an account from
the login page. Existing browser progress and saved copies can then be uploaded
from the profile page with **Upload browser data**. Official belt exams are taken
from the quizzes page; passing them promotes the account and unlocks the next
exam.

The backend allows these development origins by default:

- `http://127.0.0.1:5500`
- `http://localhost:5500`
- `http://127.0.0.1:8080`
- `http://localhost:8080`

Add another origin to `FRONTEND_ORIGINS` in `backend/.env` if needed. Separate
origins with commas.

### Access from phones and tablets on the same network

When learners join from their own devices, use the training computer's LAN
address instead of `127.0.0.1`. For example, if the server is `192.168.1.5`:

```dotenv
API_HOST=0.0.0.0
FRONTEND_ORIGINS=http://192.168.1.5:5500,http://127.0.0.1:5500,http://localhost:5500
```

Then open `http://192.168.1.5:5500` on every device. `API_HOST=0.0.0.0` makes the
API reachable from the network; the origin list must include the exact address
used in the browser or CORS blocks API calls. The website server already listens
on all interfaces.

All devices behind the same router share one public IP, so the sign-in audit
shows the same address for everyone. The admin dashboard identifies each person
by username and shows each person's exam marks separately.

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

### HTTP `403 Forbidden` on admin routes

The signed-in account has the `learner` role. Promote it to `admin` in the
`Users` table, then reload the session. See the administrator verification steps
above.

### Port 5000 is already in use

Change `API_PORT` in `backend/.env`, or stop the process using port 5000:

```powershell
Get-NetTCPConnection -LocalPort 5000
```

## Useful Files

- `backend/run.py` - application entry point
- `backend/config.py` - environment and database settings
- `backend/db.py` - pyodbc connection and parameterized query helpers
- `backend/security.py` - session helpers, belt levels, and auth decorators
- `backend/exam_bank.py` - exam question loading, delivery, and scoring
- `backend/blueprints/` - auth, progress, resources, exams, certificates, admin
- `backend/API.md` - endpoint examples and response contracts
- `data/quizzes.json` - exam question bank source
- `scripts/build-quizzes.js` - validates the bank and regenerates `html/js/quiz-data.js`
- `sql/migrations/001_backend_foundation.sql` - additive Stage 1 migration
- `sql/migrations/002_user_resource_client_ids.sql` - Stage 2 saved-copy IDs
- `sql/migrations/003_admin_glossary.sql` - Stage 4 glossary terms
- `backend/blueprints/admin.py` - administrator curriculum and reporting routes
- `html/js/api-client.js` - browser API client with offline detection
- `html/js/progress-store.js` - lesson/module progress with local cache
- `html/js/resource-store.js` - saved project copies with local fallback
- `html/js/quizzes.js` - practice quizzes and official server-scored exams
