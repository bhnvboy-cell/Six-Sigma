@echo off
setlocal EnableExtensions

cd /d "%~dp0"

set "API_PORT=5000"
set "WEB_PORT=5500"

echo ============================================
echo   Lean Six Sigma Course - Stopping services
echo ============================================

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$stopped = 0;" ^
  "$targets = Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -and (($_.CommandLine -like '*backend\run.py*') -or ($_.CommandLine -like '*http.server*%WEB_PORT%*')) };" ^
  "foreach ($t in $targets) { if ($t.ProcessId -ne $PID) { Stop-Process -Id $t.ProcessId -Force -ErrorAction SilentlyContinue; $stopped++ } };" ^
  "foreach ($port in %API_PORT%,%WEB_PORT%) { Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.OwningProcess -gt 4 } | Select-Object -ExpandProperty OwningProcess -Unique | ForEach-Object { if ($_ -ne $PID) { Stop-Process -Id $_ -Force -ErrorAction SilentlyContinue; $stopped++ } } };" ^
  "Write-Host ('Stopped ' + $stopped + ' process(es).')"

ping -n 2 127.0.0.1 >nul

powershell -NoProfile -ExecutionPolicy Bypass -Command "if (Get-NetTCPConnection -LocalPort %API_PORT%,%WEB_PORT% -State Listen -ErrorAction SilentlyContinue | Where-Object { $_.OwningProcess -gt 4 }) { Write-Host 'Warning: a service is still listening on %API_PORT% or %WEB_PORT%.'; exit 1 } else { Write-Host 'Ports %API_PORT% and %WEB_PORT% are free.' }"

endlocal
exit /b 0
