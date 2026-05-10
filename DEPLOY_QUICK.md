# 🌐 الرفع على Vercel - دليل سريع جداً

## ⏱️ 3 خطوات فقط (5 دقائق)

### خطوة 1️⃣: فتح Terminal
```
Windows + R
اكتب: cmd
اضغط: Enter
```

### خطوة 2️⃣: الذهاب للمشروع
```bash
cd C:\Users\yassine\Desktop\TEST\ferrari-pro
```

### خطوة 3️⃣: الرفع (اختر واحدة)

**الطريقة A: السريعة (موصى بها)**
```bash
npm install -g vercel
npm install
vercel
```

**الطريقة B: باستخدام السكريبت**
```bash
# على PowerShell
.\deploy.ps1
```

---

## 🎯 ما سيحدث

1. يثبّت Vercel CLI
2. يثبّت المكتبات
3. يبني المشروع
4. يرفع على Vercel
5. تحصل على رابط مباشر! 🎉

---

## 📝 الإجابات على الأسئلة

عند السؤال في Terminal:

```
? Set up and deploy "..."? [Y/n] 
→ اكتب: y

? Which scope do you want to deploy to? 
→ اختر حسابك

? Link to existing project? [y/N] 
→ اكتب: n

? What's your project's name? 
→ ferrari-showcase (أو اي اسم)

? In which directory is your code located? 
→ اضغط Enter

? Want to modify these settings? [y/N] 
→ اكتب: n
```

---

## ✅ النتيجة النهائية

سيظهر رابط مثل:
```
https://ferrari-showcase.vercel.app
```

مبروك! 🎉 موقعك مباشر الآن!

---

## 🔧 حل المشاكل

| المشكلة | الحل |
|--------|-----|
| `vercel: الأمر غير معروف` | ثبّت Node.js مجدداً |
| `Build failed` | `npm install && npm run build` |
| `No project found` | اختر `n` عند السؤال |

---

## 📊 بعد الرفع

- 🌐 الموقع يعمل 24/7
- 📈 تتبع الأداء
- 🔄 تحديثات تلقائية (مع GitHub)
- 🌍 CDN عالمي سريع

---

**استمتع بموقعك! 🚀**
