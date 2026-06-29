// Service Worker for หัวกุญแจ PWA
// แก้ค่า GAS_URL ตรงนี้ด้วย (ต้องตรงกับ index.html)
const GAS_URL = 'REPLACE_WITH_YOUR_GAS_URL';

const CACHE_NAME = 'huakunjae-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim());
});

// ส่งต่อ requests ไป GAS โดยตรง (ไม่ cache เพื่อให้ข้อมูลเป็นปัจจุบันเสมอ)
self.addEventListener('fetch', (event) => {
  // ไม่ทำอะไร — แค่ให้มี SW ก็พอสำหรับ PWA install
});
