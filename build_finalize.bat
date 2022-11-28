@echo off
setlocal

call buildconfig.cmd

echo build_finalize.bat is called.
pause

:: start loop to get user-secified path
:getpath
ECHO.
ECHO 1. Target Path - %OPTION_1%
ECHO 2. Target Path - %OPTION_2%

set choice=
set /p choice=input option no. for target path.

if not '%choice%'=='' set choice=%choice:~0,1%
if '%choice%'=='1' goto option1
if '%choice%'=='2' goto option2

ECHO "%choice%" is not a valid option, please try again.
ECHO.

goto getpath


:: start of options
:option1
echo You selected %choice%.
cd %OPTION_1%
del /s *

echo HOME DIR NAVIGATION
timeout /t 3 /nobreak
cd "%HOME_DIR%\public"

:: moves the file to branch
move /y * %OPTION_1%

goto end


:: option number 2
:option2
echo You selected %choice%.
cd %OPTION_2%
del *.*

echo HOME DIR NAVIGATION
timeout /t 3 /nobreak
cd "%HOME_DIR%\public"

:: moves the file to branch
move /y * %OPTION_2%

goto end

:: end of the program, exit.
:end
echo Script run complete.
timeout /t 2 /nobreak