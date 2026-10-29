SET NOCOUNT ON;
SET XACT_ABORT ON;
SET ANSI_NULLS ON;
SET QUOTED_IDENTIFIER ON;
SET ANSI_PADDING ON;
SET ANSI_WARNINGS ON;
SET ARITHABORT ON;
SET CONCAT_NULL_YIELDS_NULL ON;
SET NUMERIC_ROUNDABORT OFF;
GO

IF DB_ID(N'LeanSixSigmaTraining') IS NULL
BEGIN
    RAISERROR(N'LeanSixSigmaTraining does not exist. Run sql/scripts/schema.sql first.', 16, 1);
    RETURN;
END;
GO

USE LeanSixSigmaTraining;
GO

IF OBJECT_ID(N'dbo.Users', N'U') IS NULL
BEGIN
    RAISERROR(N'dbo.Users does not exist. Run sql/scripts/schema.sql first.', 16, 1);
    RETURN;
END;
GO

BEGIN TRY
    BEGIN TRANSACTION;

    IF COL_LENGTH(N'dbo.Users', N'Role') IS NULL
    BEGIN
        ALTER TABLE dbo.Users
            ADD [Role] NVARCHAR(20) NOT NULL
            CONSTRAINT DF_Users_Role DEFAULT N'learner';
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.check_constraints
        WHERE parent_object_id = OBJECT_ID(N'dbo.Users')
          AND name = N'CK_Users_Role'
    )
    BEGIN
        EXEC sys.sp_executesql N'
            ALTER TABLE dbo.Users WITH CHECK
                ADD CONSTRAINT CK_Users_Role
                CHECK ([Role] IN (N''learner'', N''admin''));';
    END;

    IF COL_LENGTH(N'dbo.UserProgress', N'LessonCode') IS NULL
    BEGIN
        ALTER TABLE dbo.UserProgress ADD LessonCode NVARCHAR(20) NULL;
    END;

    IF COL_LENGTH(N'dbo.UserProgress', N'LessonId') IS NULL
    BEGIN
        ALTER TABLE dbo.UserProgress ADD LessonId INT NULL;
    END;

    IF COL_LENGTH(N'dbo.UserProgress', N'UpdatedAt') IS NULL
    BEGIN
        ALTER TABLE dbo.UserProgress
            ADD UpdatedAt DATETIME2 NOT NULL
            CONSTRAINT DF_UserProgress_UpdatedAt DEFAULT SYSUTCDATETIME();
    END;

    DECLARE @moduleUniqueConstraint sysname = NULL;

    SELECT TOP (1) @moduleUniqueConstraint = kc.name
    FROM sys.key_constraints AS kc
    JOIN sys.index_columns AS ic
        ON ic.object_id = kc.parent_object_id
       AND ic.index_id = kc.unique_index_id
    JOIN sys.columns AS c
        ON c.object_id = ic.object_id
       AND c.column_id = ic.column_id
    WHERE kc.parent_object_id = OBJECT_ID(N'dbo.UserProgress')
      AND kc.type = N'UQ'
    GROUP BY kc.name
    HAVING COUNT(*) = 2
       AND SUM(CASE WHEN c.name = N'UserId' THEN 1 ELSE 0 END) = 1
       AND SUM(CASE WHEN c.name = N'ModuleId' THEN 1 ELSE 0 END) = 1;

    IF @moduleUniqueConstraint IS NOT NULL
    BEGIN
        DECLARE @dropConstraintSql NVARCHAR(MAX) =
            N'ALTER TABLE dbo.UserProgress DROP CONSTRAINT '
            + QUOTENAME(@moduleUniqueConstraint) + N';';
        EXEC sys.sp_executesql @dropConstraintSql;
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.UserProgress')
          AND name = N'UX_UserProgress_UserId_LessonCode'
    )
    BEGIN
        EXEC sys.sp_executesql N'
            CREATE UNIQUE INDEX UX_UserProgress_UserId_LessonCode
                ON dbo.UserProgress(UserId, LessonCode)
                WHERE LessonCode IS NOT NULL;';
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.UserProgress')
          AND name = N'IX_UserProgress_UserId_ModuleId'
    )
    BEGIN
        CREATE INDEX IX_UserProgress_UserId_ModuleId
            ON dbo.UserProgress(UserId, ModuleId);
    END;

    IF OBJECT_ID(N'dbo.Lessons', N'U') IS NOT NULL
       AND NOT EXISTS (
           SELECT 1
           FROM sys.foreign_keys
           WHERE parent_object_id = OBJECT_ID(N'dbo.UserProgress')
             AND name = N'FK_UserProgress_Lessons'
       )
    BEGIN
        EXEC sys.sp_executesql N'
            ALTER TABLE dbo.UserProgress WITH CHECK
                ADD CONSTRAINT FK_UserProgress_Lessons
                FOREIGN KEY (LessonId) REFERENCES dbo.Lessons(LessonId);';
    END;

    IF OBJECT_ID(N'dbo.ExamAttempts', N'U') IS NULL
    BEGIN
        CREATE TABLE dbo.ExamAttempts (
            ExamAttemptId INT IDENTITY(1,1) NOT NULL
                CONSTRAINT PK_ExamAttempts PRIMARY KEY,
            UserId INT NOT NULL
                CONSTRAINT FK_ExamAttempts_Users REFERENCES dbo.Users(UserId),
            BeltLevel NVARCHAR(20) NOT NULL,
            AttemptNumber INT NOT NULL
                CONSTRAINT DF_ExamAttempts_AttemptNumber DEFAULT 1,
            QuestionCount INT NULL,
            CorrectCount INT NULL,
            Score DECIMAL(5,2) NOT NULL
                CONSTRAINT CK_ExamAttempts_Score CHECK (Score >= 0 AND Score <= 100),
            PassingScore DECIMAL(5,2) NOT NULL
                CONSTRAINT DF_ExamAttempts_PassingScore DEFAULT 70,
            Passed BIT NOT NULL
                CONSTRAINT DF_ExamAttempts_Passed DEFAULT 0,
            AnswersJson NVARCHAR(MAX) NULL
                CONSTRAINT CK_ExamAttempts_AnswersJson
                CHECK (AnswersJson IS NULL OR ISJSON(AnswersJson) = 1),
            StartedAt DATETIME2 NOT NULL
                CONSTRAINT DF_ExamAttempts_StartedAt DEFAULT SYSUTCDATETIME(),
            CompletedAt DATETIME2 NULL
        );
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.ExamAttempts')
          AND name = N'IX_ExamAttempts_UserId_BeltLevel_CompletedAt'
    )
    BEGIN
        CREATE INDEX IX_ExamAttempts_UserId_BeltLevel_CompletedAt
            ON dbo.ExamAttempts(UserId, BeltLevel, CompletedAt DESC);
    END;

    IF OBJECT_ID(N'dbo.Certificates', N'U') IS NULL
    BEGIN
        CREATE TABLE dbo.Certificates (
            CertificateId INT IDENTITY(1,1) NOT NULL
                CONSTRAINT PK_Certificates PRIMARY KEY,
            UserId INT NOT NULL
                CONSTRAINT FK_Certificates_Users REFERENCES dbo.Users(UserId),
            BeltLevel NVARCHAR(20) NOT NULL,
            ExamAttemptId INT NULL
                CONSTRAINT FK_Certificates_ExamAttempts
                REFERENCES dbo.ExamAttempts(ExamAttemptId),
            LearnerName NVARCHAR(150) NOT NULL,
            VerificationId NVARCHAR(64) NOT NULL
                CONSTRAINT UQ_Certificates_VerificationId UNIQUE,
            CertificateNumber NVARCHAR(50) NULL,
            IssuedAt DATETIME2 NOT NULL
                CONSTRAINT DF_Certificates_IssuedAt DEFAULT SYSUTCDATETIME(),
            ExpiresAt DATETIME2 NULL,
            IsRevoked BIT NOT NULL
                CONSTRAINT DF_Certificates_IsRevoked DEFAULT 0
        );
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.Certificates')
          AND name = N'IX_Certificates_UserId_BeltLevel'
    )
    BEGIN
        CREATE INDEX IX_Certificates_UserId_BeltLevel
            ON dbo.Certificates(UserId, BeltLevel);
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.UserResources')
          AND name = N'IX_UserResources_UserId_ProjectName'
    )
    BEGIN
        CREATE INDEX IX_UserResources_UserId_ProjectName
            ON dbo.UserResources(UserId, ProjectName);
    END;

    COMMIT TRANSACTION;
    PRINT N'Migration 001_backend_foundation completed.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
    THROW;
END CATCH;
GO
