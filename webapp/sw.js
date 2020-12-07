self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('tdbilisim').then(function(cache) {
     return cache.addAll([
       '/webapp/',
       '/webapp/index.html',
       '/webapp/index.js',
       '/webapp/style.css'
     ]);
   })
 );
});

self.addEventListener('fetch', function(e) {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
