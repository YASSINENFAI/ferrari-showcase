# 🚀 دليل التثبيت والتشغيل

## المتطلبات

- Node.js (v16 أو أعلى)
- npm أو yarn

## خطوات التثبيت

### 1️⃣ الذهاب للمجلد

```bash
cd C:\Users\yassine\Desktop\TEST\ferrari-pro
```

### 2️⃣ تثبيت المكتبات

```bash
npm install
```

هذا سيثبت:
- ✅ React 18
- ✅ Framer Motion (حركات احترافية)
- ✅ GSAP (تأثيرات متقدمة)
- ✅ Vite (بناء سريع)

### 3️⃣ تشغيل المشروع

```bash
npm run dev
```

سيفتح المتصفح تلقائياً على: `http://localhost:3000`

## الأوامر المتاحة

```bash
# التطوير (مع Hot Reload)
npm run dev

# البناء للإنتاج
npm run build

# عرض النسخة المبنية
npm run preview
```

## هيكل الملفات

```
ferrari-pro/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx (شريط التنقل)
│   │   ├── Hero.jsx (القسم الرئيسي)
│   │   ├── CarsGallery.jsx (معرض السيارات)
│   │   ├── CarCard.jsx (بطاقة السيارة)
│   │   ├── Features.jsx (المميزات)
│   │   ├── CTA.jsx (دعوة العمل)
│   │   ├── Footer.jsx (التذييل)
│   │   └── *.css (أنماط كل مكون)
│   ├── App.jsx (التطبيق الرئيسي)
│   ├── main.jsx (نقطة الدخول)
│   └── index.css (الأنماط العامة)
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## المميزات المتقدمة

### 🎬 Framer Motion
- حركات دخول السلسة
- تأثيرات Hover و Tap
- Scroll animations

### ⚡ GSAP
- Scroll Trigger animations
- Particle effects
- Advanced timing

### 📱 Responsive Design
- يعمل على جميع الأجهزة
- تصميم سوائل (Fluid)

### 🎨 Design System
- متغيرات CSS
- نظام ألوان احترافي
- Typography متقدمة

## تخصيص المشروع

### تغيير الألوان
عدّل `src/index.css`:
```css
:root {
  --primary-red: #dc143c;
  --dark-bg: #0a0a0a;
  /* ... */
}
```

### إضافة سيارات جديدة
عدّل `src/components/CarsGallery.jsx`:
```javascript
const cars = [
  {
    id: 5,
    name: 'اسم السيارة',
    year: 2024,
    power: '1000 hp',
    speed: '380 km/h',
    engine: '6.3L V12',
    image: '🏎️',
    color: '#FF0000',
    description: 'الوصف'
  }
]
```

## النشر

### على Vercel
```bash
npm install -g vercel
vercel
```

### على Netlify
```bash
npm run build
# ثم ارفع مجلد dist إلى Netlify
```

## استكشاف الأخطاء

### المشروع لا يبدأ
```bash
rm -r node_modules
npm install
npm run dev
```

### عدم ظهور الصور
تأكد من وجود `src/` و جميع الملفات

### مشاكل الأداء
- قلل عدد الجزيئات في Hero
- استخدم CSS instead of JS للتأثيرات

## المساعدة والدعم

للمزيد من المعلومات:
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP Docs](https://gsap.com/docs/)
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)

---

**استمتع بمشروعك الاحترافي! 🚀**
