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

IF OBJECT_ID(N'dbo.UserResources', N'U') IS NULL
BEGIN
    RAISERROR(N'dbo.UserResources does not exist. Run sql/scripts/schema.sql first.', 16, 1);
    RETURN;
END;
GO

BEGIN TRY
    BEGIN TRANSACTION;

    IF COL_LENGTH(N'dbo.UserResources', N'ClientId') IS NULL
    BEGIN
        ALTER TABLE dbo.UserResources ADD ClientId NVARCHAR(64) NULL;
    END;

    IF NOT EXISTS (
        SELECT 1
        FROM sys.indexes
        WHERE object_id = OBJECT_ID(N'dbo.UserResources')
          AND name = N'UX_UserResources_UserId_ClientId'
    )
    BEGIN
        EXEC sys.sp_executesql N'
            CREATE UNIQUE INDEX UX_UserResources_UserId_ClientId
                ON dbo.UserResources(UserId, ClientId)
                WHERE ClientId IS NOT NULL;';
    END;

    COMMIT TRANSACTION;
    PRINT N'Migration 002_user_resource_client_ids completed.';
END TRY
BEGIN CATCH
    IF @@TRANCOUNT > 0
        ROLLBACK TRANSACTION;
    THROW;
END CATCH;
GO
