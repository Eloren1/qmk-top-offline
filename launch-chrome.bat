@echo off
REM ---------------------------------------------------------------------------
REM Fallback launcher: serves the archived site locally and opens it in Chrome
REM as an app window. Use this only if the packaged Electron app stops working.
REM Requires Node.js and a Chromium-based browser (Chrome or Edge).
REM Firefox does NOT support WebHID and will not work.
REM ---------------------------------------------------------------------------

setlocal
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo [!] Node.js not found on PATH. Install Node.js, or use the Electron app instead.
  pause
  exit /b 1
)

set "BROWSER="
for %%P in (
  "%ProgramFiles%\Google\Chrome\Application\chrome.exe"
  "%ProgramFiles(x86)%\Google\Chrome\Application\chrome.exe"
  "%LocalAppData%\Google\Chrome\Application\chrome.exe"
  "%ProgramFiles(x86)%\Microsoft\Edge\Application\msedge.exe"
  "%ProgramFiles%\Microsoft\Edge\Application\msedge.exe"
) do if not defined BROWSER if exist %%P set "BROWSER=%%~P"

if not defined BROWSER (
  echo [!] No Chrome or Edge found. Open http://127.0.0.1:38140/ manually in a Chromium browser.
)

echo Starting local server on http://127.0.0.1:38140/ ...
start "qmk-top-offline server" /min cmd /c "node serve.js"

REM Give the server a moment to bind the port.
ping -n 3 127.0.0.1 >nul

if defined BROWSER (
  echo Launching %BROWSER%
  start "" "%BROWSER%" --app=http://127.0.0.1:38140/ --new-window
)

echo.
echo Server is running in a minimized window. Close that window to stop it.
endlocal
