@echo off
title Portfolio Dev Server
echo Starting Portfolio Development Server...
set "PATH=C:\Users\hp\.gemini\antigravity-ide\nodejs;%PATH%"
cd /d "%~dp0"
start http://localhost:3000
npm run dev
pause
