#!/bin/bash
# 🚀 Ferrari Showcase - سكريبت الرفع السريع على Vercel

echo "🚀 بدء الرفع على Vercel..."
echo ""

# الخطوة 1: التحقق من npm
echo "1️⃣  التحقق من npm..."
if ! command -v npm &> /dev/null; then
    echo "❌ npm غير مثبتة! ثبّت Node.js من https://nodejs.org/"
    exit 1
fi
echo "✅ npm جاهزة"
echo ""

# الخطوة 2: تثبيت vercel CLI
echo "2️⃣  تثبيت Vercel CLI..."
npm install -g vercel > /dev/null 2>&1
echo "✅ Vercel CLI جاهزة"
echo ""

# الخطوة 3: تثبيت المكتبات
echo "3️⃣  تثبيت المكتبات..."
npm install
echo "✅ المكتبات مثبتة"
echo ""

# الخطوة 4: البناء
echo "4️⃣  بناء المشروع..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ فشل البناء!"
    exit 1
fi
echo "✅ تم البناء بنجاح"
echo ""

# الخطوة 5: الرفع
echo "5️⃣  الرفع على Vercel..."
vercel
echo ""
echo "✅ تم الرفع بنجاح!"
echo "🎉 الموقع الآن مباشر على الإنترنت!"
