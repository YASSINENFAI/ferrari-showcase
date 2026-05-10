# 🚀 Ferrari Showcase - سكريبت الرفع السريع على Vercel (Windows)
# استخدام: .\deploy.ps1

Write-Host "🚀 بدء الرفع على Vercel..." -ForegroundColor Cyan
Write-Host ""

# الخطوة 1: التحقق من npm
Write-Host "1️⃣  التحقق من npm..." -ForegroundColor Yellow
if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
    Write-Host "❌ npm غير مثبتة! ثبّت Node.js من https://nodejs.org/" -ForegroundColor Red
    exit 1
}
Write-Host "✅ npm جاهزة" -ForegroundColor Green
Write-Host ""

# الخطوة 2: تثبيت vercel CLI
Write-Host "2️⃣  تثبيت Vercel CLI..." -ForegroundColor Yellow
npm install -g vercel
Write-Host "✅ Vercel CLI جاهزة" -ForegroundColor Green
Write-Host ""

# الخطوة 3: تثبيت المكتبات
Write-Host "3️⃣  تثبيت المكتبات..." -ForegroundColor Yellow
npm install
Write-Host "✅ المكتبات مثبتة" -ForegroundColor Green
Write-Host ""

# الخطوة 4: البناء
Write-Host "4️⃣  بناء المشروع..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ فشل البناء!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ تم البناء بنجاح" -ForegroundColor Green
Write-Host ""

# الخطوة 5: الرفع
Write-Host "5️⃣  الرفع على Vercel..." -ForegroundColor Yellow
vercel
Write-Host ""
Write-Host "✅ تم الرفع بنجاح!" -ForegroundColor Green
Write-Host "🎉 الموقع الآن مباشر على الإنترنت!" -ForegroundColor Green
Write-Host ""
Write-Host "البحث عن رابطك على dashboard: https://vercel.com" -ForegroundColor Cyan
