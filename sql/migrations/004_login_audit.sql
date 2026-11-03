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

    IF OBJECT_ID(N'dbo.LoginAudit', N'U') IS NULL
    BEGIN
        CREATE TABLE dbo.LoginAudit (
            LoginAuditId BIGINT IDENTITY(1,1) NOT NULL
                CONSTRAINT PK_LoginAudit PRIMARY KEY,
            UserId INT NULL
                CONSTRAINT FK_LoginAudit_Users REFERENCES dbo.Users(UserId),
            Username NVARCHAR(100) NOT NULL,
            IpAddress NVARCHAR(64) NULL,
            UserAgent NVARCHAR(512) NULL,
            Success BIT NOT NULL
                CONSTRAINT DF_LoginAudit_Success DEFAULT 0,
            AttemptedAt DATETIME2 NOT NULL
                CONSTRAINT DF_LoginAudit_AttemptedAt DEFAULT SYSUTCDATETIME()
        );
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.LoginAudit')
          AND name = N'IX_LoginAudit_UserId_AttemptedAt'
    )
    BEGIN
        CREATE INDEX IX_LoginAudit_UserId_AttemptedAt
            ON dbo.LoginAudit(UserId, AttemptedAt DESC);
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.LoginAudit')
          AND name = N'IX_LoginAudit_AttemptedAt'
    )
    BEGIN
        CREATE INDEX IX_LoginAudit_AttemptedAt
            ON dbo.LoginAudit(AttemptedAt DESC);
    END;

    COMMIT TRANSACTION;
    PRINT N'Migration 004_login_audit completed.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
    THROW;
END CATCH;
GO
