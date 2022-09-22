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
        './assets/js/breakpoints.min.js',
        './assets/js/browser.min.js',
        './assets/js/jquery.min.js',
        './assets/js/jquery.scrollex.min.js',
        './assets/js/jquery.scrolly.min.js',
        './assets/js/util.js',
        './assets/pwa-build/manifest.json',

        './assets/sass/main.scss',
        './images/banner.png',
        './images/nos.png',
        './images/Logo/avatar.png',
        './images/avatar.png',
        './images/pacotes/1.jpg',
        './images/pacotes/2.jpg',
        './images/pacotes/3.jpg',
        './images/pacotes/4.jpg',
        './images/pacotes/5.jpg',
        './images/pacotes/6.jpg',
        './images/Logo/android/mipmap-hdpi/brisa_viagens.png',
        './images/Logo/android/mipmap-mdpi/brisa_viagens.png',
        './images/Logo/android/mipmap-xhdpi/brisa_viagens.png',
        './images/Logo/android/mipmap-xxxhdpi/brisa_viagens.png',
        './images/Logo/avatar.png',
        
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