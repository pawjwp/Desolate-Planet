@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem === SETTINGS ===
set "COPY_LIST_FILE=%~dp0\configs\client-copy-list.txt"
set "EXPORT_DIR_NAME=packwiz-builds"

rem === Resolve folder paths ===
set "SCRIPTDIR=%~dp0"
for %%I in ("%SCRIPTDIR%..") do set "ROOT=%%~fI"
set "DEST=%ROOT%\packwiz-curseforge"
set "PACK_FILE=%DEST%\pack.toml"
set "EXPORT_DIR=%ROOT%\%EXPORT_DIR_NAME%"

if not exist "%DEST%" (
  echo [ERROR] Expected folder not found: "%DEST%"
  exit /b 1
)
if not exist "%PACK_FILE%" (
  echo [ERROR] pack.toml not found at: "%PACK_FILE%"
  exit /b 1
)
if not exist "%COPY_LIST_FILE%" (
  echo [ERROR] Copy list not found: "%COPY_LIST_FILE%"
  exit /b 1
)

rem === Build global exclude args from list (!prefix) ===
set "XD_ARGS="
set "XF_ARGS="
for /f "usebackq tokens=* delims= eol=#" %%L in ("%COPY_LIST_FILE%") do (
  set "LINE=%%L"
  if defined LINE if "!LINE:~0,1!"=="-" (
    set "EX=!LINE:~1!"
    if exist "%ROOT%\!EX!\" (
      rem exclude directory
      set "XD_ARGS=!XD_ARGS! /XD ""%ROOT%\!EX!"""
    ) else (
      rem exclude file (or pattern)
      set "XF_ARGS=!XF_ARGS! /XF ""%ROOT%\!EX!"""
    )
  )
)

rem === Pre-cleanup in case the previous export failed to resolve ===
echo.
echo === Pre-cleanup: removing any leftover copied items ===
call :CLEAN_LIST_COPIES "%DEST%" "%COPY_LIST_FILE%"

where packwiz >nul 2>nul
if errorlevel 1 (
  echo [ERROR] packwiz not found in PATH.
  exit /b 1
)

if not exist "%EXPORT_DIR%" mkdir "%EXPORT_DIR%"

echo.
echo === Copying items into packwiz-curseforge from list ===
for /f "usebackq tokens=* delims= eol=#" %%L in ("%COPY_LIST_FILE%") do (
  set "ITEM=%%L"
  if defined ITEM (
    set "FC=!ITEM:~0,1!"
    if "!FC!"=="-" (
      rem excluded entry
    ) else (
      set "SRC=%ROOT%\!ITEM!"
      set "DST=%DEST%\!ITEM!"
      if exist "!SRC!\" (
        echo   [+] DIR  "!ITEM!"
        rem apply global excludes to directory copies if present
        robocopy "!SRC!" "!DST!" /E /NFL /NDL /NJH /NJS /NP %XD_ARGS% %XF_ARGS% >nul
        if errorlevel 8 (
          echo   [ERROR] robocopy failed for directory "!ITEM!"
          goto :CLEANUP_AND_FAIL
        )
      ) else if exist "!SRC!" (
        echo   [+] FILE "!ITEM!"
        for %%P in ("!DST!") do set "DSTDIR=%%~dpP"
        if not exist "!DSTDIR!" mkdir "!DSTDIR!" 2>nul
        copy /Y "!SRC!" "!DST!" >nul
        if errorlevel 1 (
          echo   [ERROR] copy failed for file "!ITEM!"
          goto :CLEANUP_AND_FAIL
        )
      ) else (
        echo   [!] Skipping "!ITEM!" (not found at root)
      )
    )
  )
)

echo.
echo === Export (curseforge) using default filename into %EXPORT_DIR_NAME% ===
pushd "%EXPORT_DIR%"
packwiz curseforge export -y --pack-file "%PACK_FILE%"
set "PW_EXIT=%ERRORLEVEL%"
popd
if not "%PW_EXIT%"=="0" (
  echo [ERROR] packwiz curseforge export failed.
  goto :CLEANUP_AND_FAIL
)


echo.
echo === Cleaning up copied items (files and directories) ===
call :CLEAN_LIST_COPIES "%DEST%" "%COPY_LIST_FILE%"

echo [OK] Export complete (default-named file in "%EXPORT_DIR%")
exit /b 0

:CLEANUP_AND_FAIL
echo.
echo === Cleaning up after failure ===
call :CLEAN_LIST_COPIES "%DEST%" "%COPY_LIST_FILE%"
exit /b 1

:CLEAN_LIST_COPIES
rem %1 = DEST base, %2 = copy-list file
set "CLEAN_DEST=%~1"
set "CLEAN_LIST=%~2"
for /f "usebackq tokens=* delims= eol=#" %%L in ("%CLEAN_LIST%") do (
  set "ITEM=%%L"
  if defined ITEM (
    set "TGT=%CLEAN_DEST%\!ITEM!"
    if exist "!TGT!\" (
      rmdir /S /Q "!TGT!" 2>nul
    ) else if exist "!TGT!" (
      del /Q "!TGT!" 2>nul
    )
  )
)
powershell -NoProfile -Command ^
  "$base = '%CLEAN_DEST%';" ^
  "do {" ^
  "  $removed = 0;" ^
  "  Get-ChildItem -LiteralPath $base -Recurse -Directory |" ^
  "    Where-Object { ($_.GetFileSystemInfos().Count -eq 0) } |" ^
  "    ForEach-Object { Remove-Item -LiteralPath $_.FullName -Force; $removed++ };" ^
  "} while ($removed -gt 0)"
goto :eof
