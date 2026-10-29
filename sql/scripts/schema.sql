CREATE DATABASE LeanSixSigmaTraining;
GO

USE LeanSixSigmaTraining;
GO

-- Users table for LMS
CREATE TABLE Users (
    UserId INT IDENTITY(1,1) PRIMARY KEY,
    Username NVARCHAR(50) UNIQUE NOT NULL,
    Email NVARCHAR(100) UNIQUE NOT NULL,
    PasswordHash NVARCHAR(255) NOT NULL,
    FirstName NVARCHAR(50),
    LastName NVARCHAR(50),
    BeltLevel NVARCHAR(20) DEFAULT 'None',
    RegistrationDate DATETIME DEFAULT GETDATE(),
    LastLogin DATETIME,
    IsActive BIT DEFAULT 1
);

-- Fillable resource templates. Field definitions and examples are JSON.
CREATE TABLE Resources (
    ResourceId NVARCHAR(50) PRIMARY KEY,
    Title NVARCHAR(150) NOT NULL,
    DMAICPhase NVARCHAR(20) NOT NULL, -- Define, Measure, Analyze, Improve, Control
    MinBelt NVARCHAR(20) NOT NULL, -- white, yellow, green, black, master-black
    Icon NVARCHAR(60),
    EstimatedMinutes INT,
    Description NVARCHAR(600),
    FieldsJson NVARCHAR(MAX) NOT NULL CHECK (ISJSON(FieldsJson) = 1),
    ExampleJson NVARCHAR(MAX) NOT NULL CHECK (ISJSON(ExampleJson) = 1),
    SortOrder INT DEFAULT 0,
    IsActive BIT DEFAULT 1
);

-- Learner-owned copies of resource templates.
CREATE TABLE UserResources (
    UserResourceId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL FOREIGN KEY REFERENCES Users(UserId),
    ResourceId NVARCHAR(50) NOT NULL FOREIGN KEY REFERENCES Resources(ResourceId),
    CopyName NVARCHAR(200) NOT NULL,
    ProjectName NVARCHAR(200),
    Status NVARCHAR(20) DEFAULT 'Draft', -- Draft, In Progress, Complete
    DataJson NVARCHAR(MAX) NOT NULL CHECK (ISJSON(DataJson) = 1),
    CreatedAt DATETIME2 DEFAULT SYSUTCDATETIME(),
    UpdatedAt DATETIME2 DEFAULT SYSUTCDATETIME()
);

CREATE INDEX IX_UserResources_UserId_UpdatedAt ON UserResources(UserId, UpdatedAt DESC);
CREATE INDEX IX_Resources_DMAICPhase ON Resources(DMAICPhase, SortOrder);

-- Modules table
CREATE TABLE Modules (
    ModuleId INT PRIMARY KEY,
    Title NVARCHAR(200) NOT NULL,
    BeltLevel NVARCHAR(20) NOT NULL,
    Description NVARCHAR(500),
    DurationMinutes INT,
    Objectives NVARCHAR(MAX),
    Prerequisites NVARCHAR(200),
    DisplayOrder INT
);

-- Lessons within each module
CREATE TABLE Lessons (
    LessonId INT IDENTITY(1,1) PRIMARY KEY,
    ModuleId INT FOREIGN KEY REFERENCES Modules(ModuleId),
    LessonCode NVARCHAR(20) NOT NULL,
    LessonOrder INT NOT NULL,
    Title NVARCHAR(200) NOT NULL,
    Objective NVARCHAR(500),
    UNIQUE(ModuleId, LessonCode)
);

-- User progress tracking
CREATE TABLE UserProgress (
    ProgressId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    ModuleId INT FOREIGN KEY REFERENCES Modules(ModuleId),
    Status NVARCHAR(20) DEFAULT 'Not Started', -- Not Started, In Progress, Completed
    StartDate DATETIME,
    CompletionDate DATETIME,
    Score INT,
    TimeSpentMinutes INT DEFAULT 0,
    UNIQUE(UserId, ModuleId)
);

-- Quizzes
CREATE TABLE Quizzes (
    QuizId INT IDENTITY(1,1) PRIMARY KEY,
    ModuleId INT FOREIGN KEY REFERENCES Modules(ModuleId),
    Title NVARCHAR(200),
    PassingScore INT DEFAULT 80,
    TimeLimitMinutes INT
);

-- Quiz questions
CREATE TABLE QuizQuestions (
    QuestionId INT IDENTITY(1,1) PRIMARY KEY,
    QuizId INT FOREIGN KEY REFERENCES Quizzes(QuizId),
    QuestionText NVARCHAR(1000) NOT NULL,
    OptionA NVARCHAR(500),
    OptionB NVARCHAR(500),
    OptionC NVARCHAR(500),
    OptionD NVARCHAR(500),
    CorrectAnswer CHAR(1) NOT NULL, -- A, B, C, or D
    Explanation NVARCHAR(1000)
);

-- Quiz attempts
CREATE TABLE QuizAttempts (
    AttemptId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    QuizId INT FOREIGN KEY REFERENCES Quizzes(QuizId),
    Score INT,
    TotalQuestions INT,
    CorrectAnswers INT,
    AttemptDate DATETIME DEFAULT GETDATE(),
    Passed BIT
);

-- Projects/case studies
CREATE TABLE Projects (
    ProjectId INT IDENTITY(1,1) PRIMARY KEY,
    Title NVARCHAR(200),
    BeltLevel NVARCHAR(20),
    Description NVARCHAR(MAX),
    Scenario NVARCHAR(MAX),
    Requirements NVARCHAR(MAX),
    DueDays INT DEFAULT 30
);

-- User projects
CREATE TABLE UserProjects (
    UserProjectId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    ProjectId INT FOREIGN KEY REFERENCES Projects(ProjectId),
    Status NVARCHAR(20) DEFAULT 'Assigned',
    SubmissionDate DATETIME,
    Grade NVARCHAR(10),
    Feedback NVARCHAR(MAX),
    SubmissionText NVARCHAR(MAX)
);

-- Certifications
CREATE TABLE Certifications (
    CertificationId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT FOREIGN KEY REFERENCES Users(UserId),
    BeltLevel NVARCHAR(20) NOT NULL,
    CertificationDate DATETIME DEFAULT GETDATE(),
    CertificateNumber NVARCHAR(50) UNIQUE,
    ExpiryDate DATETIME
);

-- Full curriculum seed (26 modules, 111 lessons, starter quiz) is in seed_modules.sql.
-- Run this file first, then seed_modules.sql.
GO
