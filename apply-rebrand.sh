@echo off
setlocal
cd /d "%~dp0"

if not exist index.html (
  echo ERROR: index.html was not found.
  echo Put this package in the root of your ominous-realms repo, next to index.html.
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo ERROR: Node.js was not found.
  echo Install Node.js or run: node rebrand-ominous-realms.mjs
  pause
  exit /b 1
)

echo Applying Ominous Realms rebrand...
node rebrand-ominous-realms.mjs

if errorlevel 1 (
  echo.
  echo Something failed. Read the message above.
  pause
  exit /b 1
)

echo.
echo Done. Updated files are ready.
echo Open index.html to test.
pause
