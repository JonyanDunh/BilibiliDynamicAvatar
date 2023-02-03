@echo off
title APNG to GIF to WEBP by YIU
color 3e
echo.
echo.
:op
if "%~1"=="" (
 echo.
 echo 错误！
 echo.
 echo 请把图片拖放到这个文件上、而不是打开
 echo.
 echo 支持图片转换方式：
 echo  	.gif        ^-^>  .webp
 echo 	.webp       ^-^>  .gif
 echo 	.png^(apng^)  ^-^>  .gif
 timeout /t 8 >nul
 goto :eof
)

for %%i in (%*) do (
if not exist %%~si\NUL (
 if /i %%~xi==.webp (
  %~dp0g2wbin\webp2gif %%i
 ) ^
 else if /i %%~xi==.gif (
  %~dp0g2wbin\gif2webp -q 97 -m 5 -loop_compatibility -mt %%i -o "%%~ni.webp"
 ) ^
 else if /i %%~xi==.png (
  %~dp0g2wbin\apng2gif %%i
 )
)
)
echo.
echo.
echo 转换完成！
timeout /t 3 >nul