@echo off
setlocal EnableExtensions

cd /d "%~dp0"

set "VENV_DIR=%~dp0.venv"
set "PY=%VENV_DIR%\Scripts\python.exe"
set "API_PORT=5000"
set "WEB_PORT=5500"

echo ============================================
echo   Lean Six Sigma Course - Starting services
echo ============================================

rem Clean up any previous instances of the course services
call "%~dp0kill.bat" >nul 2>&1

rem Check if ports are occupied by an external application
powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Get-NetTCPConnection -LocalPort %API_PORT%,%WEB_PORT% -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.OwningProcess -gt 4 }) { exit 1 }"
if errorlevel 1 (
    echo ERROR: Port %API_PORT% or %WEB_PORT% is already in use by another application.
    echo Please close that application, then try again.
    pause
    exit /b 1
)

rem Check or create virtual environment
if not exist "%PY%" (
    echo Creating Python virtual environment...
    where py >nul 2>nul
    if not errorlevel 1 (
        py -m venv "%VENV_DIR%"
    ) else (
        where python >nul 2>nul
        if not errorlevel 1 (
            python -m venv "%VENV_DIR%"
        )
    )
    if not exist "%PY%" (
        echo ERROR: Could not create the virtual environment.
        echo Please install Python 3.10+ and make sure it is added to your PATH.
        pause
        exit /b 1
    )
)

rem Test python interpreter
"%PY%" -c "import sys" >nul 2>nul
if errorlevel 1 (
    echo Virtual environment is invalid. Re-creating...
    rmdir /s /q "%VENV_DIR%"
    where py >nul 2>nul
    if not errorlevel 1 (
        py -m venv "%VENV_DIR%"
    ) else (
        python -m venv "%VENV_DIR%"
    )
)

rem Verify and install dependencies
"%PY%" -c "import flask, flask_cors, bcrypt, dotenv" >nul 2>nul
if errorlevel 1 (
    echo Installing Python dependencies...
    "%PY%" -m pip install --upgrade pip >nul 2>&1
    "%PY%" -m pip install -r "%~dp0backend\requirements.txt"
    "%PY%" -c "import flask, flask_cors, bcrypt, dotenv" >nul 2>nul
    if errorlevel 1 (
        echo ERROR: Core web dependencies failed to install.
        pause
        exit /b 1
    )
)

"%PY%" -c "import pyodbc" >nul 2>nul
if errorlevel 1 (
    echo Note: pyodbc is not installed. Database sync will be unavailable, but the course website will run offline with local storage.
)

rem Ensure backend .env exists
if not exist "%~dp0backend\.env" (
    echo Creating backend\.env with a random secret key...
    powershell -NoProfile -ExecutionPolicy Bypass -Command "$c = Get-Content 'backend\.env.example' -Raw; $s = -join (1..32 | ForEach-Object { '{0:x2}' -f (Get-Random -Maximum 256) }); $c = $c -replace '(?m)^FLASK_SECRET_KEY=.*$', ('FLASK_SECRET_KEY=' + $s); Set-Content 'backend\.env' $c -NoNewline"
)

echo Starting Flask API on http://127.0.0.1:%API_PORT% ...
start "Lean Six Sigma API" /d "%~dp0" "%PY%" "%~dp0backend\run.py"

echo Starting website on http://127.0.0.1:%WEB_PORT% ...
start "Lean Six Sigma Web" /d "%~dp0" "%PY%" -m http.server %WEB_PORT% --directory "%~dp0html"

echo Waiting for services to initialize...
ping -n 4 127.0.0.1 >nul

echo Opening login page in your browser...
start "" "http://127.0.0.1:%WEB_PORT%/login.html"

echo.
echo ============================================
echo   Lean Six Sigma Course is running!
echo   Website: http://127.0.0.1:%WEB_PORT%
echo   API:     http://127.0.0.1:%API_PORT%
echo   To stop all services, run kill.bat
echo ============================================
echo.

endlocal
exit /b 0
