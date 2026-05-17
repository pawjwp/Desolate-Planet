@echo off
setlocal

rem ====== SETTINGS ======
set "FORGE_VERSION=1.20.1-47.4.20"
set "FORGE_JAR=forge-%FORGE_VERSION%-installer.jar"

rem ====== Paths ======
for %%I in ("%~dp0..") do set "ROOT=%%~fI"
set "TOOLS_DIR=%~dp0tools"
set "FORGE_URL=https://maven.minecraftforge.net/net/minecraftforge/forge/%FORGE_VERSION%/%FORGE_JAR%"
set "FORGE_PATH=%TOOLS_DIR%\%FORGE_JAR%"
set "SERVER_DIR=%ROOT%\packwiz-server"

rem ====== Prep ======
if not exist "%TOOLS_DIR%" mkdir "%TOOLS_DIR%"
if not exist "%SERVER_DIR%" mkdir "%SERVER_DIR%"

rem ====== Download Forge installer (if missing) ======
if not exist "%FORGE_PATH%" (
  echo Downloading Forge %FORGE_VERSION%...
  curl -L -o "%FORGE_PATH%" "%FORGE_URL%"
)

rem ====== Install Forge server ======
echo Installing Forge server into "%SERVER_DIR%"...
java -jar "%FORGE_PATH%" --installServer "%SERVER_DIR%"

echo [OK] Forge server installed.
endlocal
pause