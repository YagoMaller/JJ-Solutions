/*  cache-first SW – mantener en / (raíz) para que capte todo el sitio */
const CACHE   = 'jj-solutions-v1';
const ASSETS  = [
  '/',                         // raíz
  '/index.html',
  '/style2.css',
  '/animations.css',
  '/menu.js',
  '/slider5.js',
  '/logo3.png'
  // añade aquí el resto de imágenes estáticas
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    caches.match(e.request).then(hit =>
      hit || fetch(e.request).then(resp => {
        const clone = resp.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
        return resp;
      })
    )
  );
});
