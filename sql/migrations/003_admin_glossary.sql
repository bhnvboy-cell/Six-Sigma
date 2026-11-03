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

BEGIN TRY
    BEGIN TRANSACTION;

    IF OBJECT_ID(N'dbo.GlossaryTerms', N'U') IS NULL
    BEGIN
        CREATE TABLE dbo.GlossaryTerms (
            TermId INT IDENTITY(1,1) NOT NULL
                CONSTRAINT PK_GlossaryTerms PRIMARY KEY,
            Term NVARCHAR(150) NOT NULL,
            Definition NVARCHAR(1000) NOT NULL,
            CreatedAt DATETIME2 NOT NULL
                CONSTRAINT DF_GlossaryTerms_CreatedAt DEFAULT SYSUTCDATETIME(),
            UpdatedAt DATETIME2 NOT NULL
                CONSTRAINT DF_GlossaryTerms_UpdatedAt DEFAULT SYSUTCDATETIME(),
            CONSTRAINT UQ_GlossaryTerms_Term UNIQUE (Term)
        );
    END;

    COMMIT TRANSACTION;
    PRINT N'Migration 003_admin_glossary completed.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
    THROW;
END CATCH;
GO
