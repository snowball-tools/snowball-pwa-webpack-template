self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("snowball-pwa-cache").then((cache) => {
      return cache.addAll([
        "/index.html",
        "/dist/main.js",
        "/images/icons/maskable_512.png",
        "/images/icons/maskable_192.png",
        "/images/icons/apple-touch-icon_180.png",
        "/images/icons/apple-touch-icon_120.png",
        "/images/icons/icon_512.png",
        "/images/icons/icon_192.png",
        "/images/screenshots/screenshot.png",
        "/images/socials/Social_Image.svg",
        // Add other static assets here
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
