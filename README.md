# หัวกุญแจ — PWA Shell (GitHub Pages)

ไฟล์นี้ใช้เป็น "shell" บน GitHub Pages เพื่อให้แอป **หัวกุญแจ** ติดตั้งบนหน้าจอมือถือได้โดยไม่มีแบดจ์ Chrome

---

## 📁 โครงสร้างไฟล์

```
huakunjae-pwa/
├── index.html          ← หน้า splash + redirect ไป GAS
├── manifest.json       ← Web App Manifest (ควบคุม PWA)
├── sw.js               ← Service Worker (required สำหรับ PWA)
├── icon-192.png        ← ไอคอน 192×192
├── icon-512.png        ← ไอคอน 512×512
└── apple-touch-icon.png ← ไอคอน iOS 180×180
```

---

## 🚀 ขั้นตอนติดตั้ง

### 1. สร้าง GitHub Repository

1. ไปที่ https://github.com/new
2. ตั้งชื่อ repo เช่น `huakunjae-pwa`
3. เลือก **Public**
4. กด **Create repository**

### 2. อัปโหลดไฟล์

Upload ไฟล์ทั้ง 6 ไฟล์เข้า repository

### 3. ใส่ GAS URL

แก้ไฟล์ `index.html` และ `sw.js` — เปลี่ยน:
```
REPLACE_WITH_YOUR_GAS_DEPLOYMENT_URL
```
เป็น Deployment URL จริงของ GAS เช่น:
```
https://script.google.com/macros/s/AKfy.../exec
```

### 4. เปิด GitHub Pages

1. ไปที่ **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. กด **Save**

รอสักครู่ แล้ว URL จะเป็น:
```
https://YOUR-USERNAME.github.io/huakunjae-pwa/
```

### 5. ติดตั้งบนมือถือ

**Android (Chrome):**
- เปิด URL บน Chrome
- กด ⋮ → "เพิ่มลงในหน้าจอหลัก"
- ไอคอนจะปรากฏ **ไม่มีแบดจ์ Chrome** ✅

**iOS (Safari):**
- เปิด URL บน Safari
- กด Share → "เพิ่มลงในหน้าจอโฮม"

---

## ✅ ผลลัพธ์

- ไอคอนสวยงาม ไม่มีโลโก้ Chrome ติดมา
- กด icon แล้วเปิดเป็น Fullscreen (ไม่มี browser bar)
- Splash screen แสดงชื่อแอปก่อน redirect ไป GAS
