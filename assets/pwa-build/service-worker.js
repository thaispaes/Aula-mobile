var cacheName = 'brisaviagens-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/css/fontawesome-all.min.css',

        './assets/js/main.js',

        './assets/sass/main.scss',
        './images/banner.png',
        './images/nos.png',
        'images/pacotes/1.jpg',
        'images/pacotes/2.jpg',
        'images/pacotes/3.jpg',
        'images/pacotes/4.jpg',
        'images/pacotes/5.jpg',
        'images/pacotes/6.jpg',
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
     try {
       return await fetch(event.request);
     } catch (err) {
       return caches.match(event.request);
     }
   }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});