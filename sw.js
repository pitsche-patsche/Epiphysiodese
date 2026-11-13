// Version bei jeder Änderung hochzählen — erzwingt das Nachladen auf allen Geräten.
const VERSION = 'v7';
const SHELL = 'shell-' + VERSION;
const RUNTIME = 'runtime-' + VERSION;

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(SHELL)
      .then(c => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== SHELL && k !== RUNTIME).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // App-Shell: erst Cache, dann Netz.
  if (ASSETS.some(a => req.url.endsWith(a.replace('./', '')))) {
    e.respondWith(caches.match(req).then(r => r || fetch(req)));
    return;
  }

  // Alles andere (v. a. die Schriften): Netz bevorzugen, Kopie ablegen,
  // offline aus dem Cache bedienen.
  e.respondWith(
    fetch(req)
      .then(res => {
        const copy = res.clone();
        caches.open(RUNTIME).then(c => c.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() => caches.match(req))
  );
});
