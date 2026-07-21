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

REM The archive is split into ~95 MB volumes (.001, .002, ...) because GitHub
REM rejects any single file over 100 MB. 7za joins them automatically when
REM pointed at the first volume, but ALL of them must be present.
set "ARCHIVE=release\qmk-top-offline-app.7z.001"
set "EXTRACTOR=tools\7za.exe"
set "TARGET=dist"

if not exist "%ARCHIVE%" (
  echo [!] Missing %ARCHIVE%
  echo     If this is a git clone, the archive should have come with it.
  echo     If you downloaded the ZIP, make sure it finished extracting.
  pause
  exit /b 1
)

if not exist "%EXTRACTOR%" (
  echo [!] Missing %EXTRACTOR%
  echo     Any 7-Zip build can extract %ARCHIVE% manually into %TARGET%\
  pause
  exit /b 1
)

for /f %%N in ('dir /b release\qmk-top-offline-app.7z.* 2^>nul ^| find /c /v ""') do set "VOLS=%%N"
echo Extracting %VOLS% archive volume(s) into %TARGET%\ ...
echo This unpacks about 1 GB and takes a couple of minutes.
"%EXTRACTOR%" x "%ARCHIVE%" -o"%TARGET%" -y
if errorlevel 1 (
  echo [!] Extraction failed.
  echo     Most likely a volume is missing or truncated - all of
  echo     release\qmk-top-offline-app.7z.* must be present.
  pause
  exit /b 1
)

echo.
echo Done. Run:
echo     "%TARGET%\QMK.top Offline-win32-x64\QMK.top Offline.exe"
echo.
pause
endlocal
