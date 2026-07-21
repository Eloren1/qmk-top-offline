@echo off
REM ---------------------------------------------------------------------------
REM Restores the ready-to-run application from the archive committed to git.
REM
REM Deliberately requires NOTHING installed: no Node.js, no npm, no 7-Zip.
REM The extractor ships in tools\. A fresh clone plus this script gives you a
REM working program.
REM ---------------------------------------------------------------------------

setlocal
cd /d "%~dp0"

set "ARCHIVE=release\qmk-top-offline-app.7z"
set "EXTRACTOR=tools\7za.exe"
set "TARGET=dist"

if not exist "%ARCHIVE%" (
  echo [!] Missing %ARCHIVE%
  echo     If this is a git clone, the archive should have come with it.
  pause
  exit /b 1
)

if not exist "%EXTRACTOR%" (
  echo [!] Missing %EXTRACTOR%
  echo     Any 7-Zip build can extract %ARCHIVE% manually into %TARGET%\
  pause
  exit /b 1
)

echo Extracting %ARCHIVE% into %TARGET%\ ...
"%EXTRACTOR%" x "%ARCHIVE%" -o"%TARGET%" -y
if errorlevel 1 (
  echo [!] Extraction failed.
  pause
  exit /b 1
)

echo.
echo Done. Run:
echo     "%TARGET%\QMK.top Offline-win32-x64\QMK.top Offline.exe"
echo.
pause
endlocal
