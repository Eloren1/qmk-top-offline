@echo off
REM ---------------------------------------------------------------------------
REM Single entry point. Extracts the app on first run, then launches it.
REM Requires nothing installed: no Node.js, no npm, no 7-Zip.
REM ---------------------------------------------------------------------------

setlocal
cd /d "%~dp0"

set "APP=dist\QMK.top Offline-win32-x64\QMK.top Offline.exe"

if not exist "%APP%" (
  echo First run - unpacking the application, this takes a moment...
  echo.
  call "restore-app.bat" < nul
  if errorlevel 1 exit /b 1
)

if not exist "%APP%" (
  echo [!] Could not find "%APP%" after extraction.
  pause
  exit /b 1
)

start "" "%APP%"
endlocal
