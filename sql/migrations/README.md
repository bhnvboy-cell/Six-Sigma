# Database Migrations

Migrations extend an existing Lean Six Sigma database without dropping tables or
deleting learner data. Apply them in numeric order after the base
`sql/scripts/schema.sql` script.

## Apply

From the repository root:

```powershell
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\schema.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\001_backend_foundation.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\002_user_resource_client_ids.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\003_admin_glossary.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\004_login_audit.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_modules.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\seed_resources.sql -b
```

Use `-d LeanSixSigmaTraining` instead of `-i schema.sql` when the database
already exists. Every migration is written to be safe to run more than once.

## 001_backend_foundation.sql

Adds:

- `Users.Role` with a `learner`/`admin` check constraint
- Lesson-level columns on `UserProgress`
- A filtered unique index on `(UserId, LessonCode)`
- `ExamAttempts`
- `Certificates` with a unique verification ID
- Supporting indexes for progress, exam history, certificates, and project copies

The migration replaces the old module-only unique constraint on
`UserProgress(UserId, ModuleId)`. Existing rows are preserved. Back up production
data before applying any schema change.

## 002_user_resource_client_ids.sql

Adds:

- `UserResources.ClientId` (`NVARCHAR(64)`, nullable)
- A filtered unique index on `(UserId, ClientId)` where `ClientId IS NOT NULL`

The browser generates a `ClientId` for each saved copy. The API uses it to make
local-storage migration and retried saves idempotent. Existing rows are preserved
with `ClientId = NULL`.

## 003_admin_glossary.sql

Creates:

- `GlossaryTerms` with `TermId`, unique `Term`, `Definition`, `CreatedAt`, and
  `UpdatedAt`

The table is used by the Stage 4 `/api/admin/glossary` routes.

## 004_login_audit.sql

Creates:

- `LoginAudit` with `LoginAuditId`, nullable `UserId`, `Username`, `IpAddress`,
  `UserAgent`, `Success`, and `AttemptedAt`
- Indexes on `(UserId, AttemptedAt DESC)` and `AttemptedAt DESC`

The API writes every sign-in attempt to this table, including failed attempts.
Because learners on one network share an IP address, the admin dashboard uses
the username to identify each person and the IP to confirm the shared network.

## Stage 3 schema

Stage 3 exams and certificates use the `ExamAttempts` and `Certificates` tables
created by `001_backend_foundation.sql`; no additional migration is required.
The application supplies the passing score from `EXAM_PASS_PERCENT`, so the
table's legacy `PassingScore` default of `70` is not used by API writes.

## Verify

```sql
USE LeanSixSigmaTraining;

SELECT COL_LENGTH('dbo.Users', 'Role') AS RoleColumn;
SELECT COL_LENGTH('dbo.UserProgress', 'LessonCode') AS LessonCodeColumn;
SELECT COL_LENGTH('dbo.UserResources', 'ClientId') AS ClientIdColumn;
SELECT OBJECT_ID('dbo.ExamAttempts') AS ExamAttemptsTable;
SELECT OBJECT_ID('dbo.Certificates') AS CertificatesTable;
SELECT OBJECT_ID('dbo.GlossaryTerms') AS GlossaryTermsTable;
SELECT OBJECT_ID('dbo.LoginAudit') AS LoginAuditTable;
SELECT name FROM sys.indexes WHERE name = 'UX_UserProgress_UserId_LessonCode';
SELECT name FROM sys.indexes WHERE name = 'IX_LoginAudit_AttemptedAt';
SELECT name FROM sys.indexes WHERE name = 'UX_UserResources_UserId_ClientId';
```
