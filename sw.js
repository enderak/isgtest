const CACHE_NAME = 'isg-exam-v1';
const ASSETS = [
    './',
    './index.html',
    './manifest.json',
    'https://cdn.tailwindcss.com',
    'https://unpkg.com/lucide@latest',
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap'
];

// Kurulum: Önbellekleme
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => cache.addAll(ASSETS))
    );
});

// Aktifleştirme: Eski cache temizliği
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys.filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
});

// Fetch: Önbellekten veya ağdan getirme (Network First strategy for dynamic content, Cache First for static)
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            // Önbellekte varsa döndür, yoksa fetch et
            return cachedResponse || fetch(event.request).then((response) => {
                return caches.open(CACHE_NAME).then((cache) => {
                    // Yeni gelen response'u önbelleğe al (dinamik cache)
                    // Not: CDN ve external requestler için dikkatli olunmalı
                    if (event.request.url.startsWith('http')) {
                        cache.put(event.request, response.clone());
                    }
                    return response;
                });
            });
        }).catch(() => {
            // Offline ise ve cache yoksa fallback (isteğe bağlı)
            if (event.request.mode === 'navigate') {
                return caches.match('./index.html');
            }
        })
    );
});
