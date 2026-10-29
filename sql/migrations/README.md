# Database Migrations

Migrations extend an existing Lean Six Sigma database without dropping tables or
deleting learner data. Apply them in numeric order after the base
`sql/scripts/schema.sql` script.

## Apply

From the repository root:

```powershell
sqlcmd -S ".\SQLEXPRESS" -i sql\scripts\schema.sql -b
sqlcmd -S ".\SQLEXPRESS" -i sql\migrations\001_backend_foundation.sql -b
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

## Verify

```sql
USE LeanSixSigmaTraining;

SELECT COL_LENGTH('dbo.Users', 'Role') AS RoleColumn;
SELECT COL_LENGTH('dbo.UserProgress', 'LessonCode') AS LessonCodeColumn;
SELECT OBJECT_ID('dbo.ExamAttempts') AS ExamAttemptsTable;
SELECT OBJECT_ID('dbo.Certificates') AS CertificatesTable;
SELECT name FROM sys.indexes WHERE name = 'UX_UserProgress_UserId_LessonCode';
```
