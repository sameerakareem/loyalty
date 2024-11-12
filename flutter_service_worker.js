'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b1d57aef638cc9cb60df10699ac4d605",
"version.json": "cfc4d8fce0dd6284ea132d9fe877f2d1",
"index.html": "95c200e3d955a9de462541dac6855dbe",
"/": "95c200e3d955a9de462541dac6855dbe",
"flutter_bootstrap.js": "bc8f39cc5bcec8b6a6574ce28570eb71",
"assets/fonts/MaterialIcons-Regular.otf": "6caaa22dffc1fe008bea935c679f1d3c",
"assets/AssetManifest.bin.json": "ab722a9122320e89dcac174be493d57d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/NOTICES": "fced30ab01f58782ba1d2aaa1426aac9",
"assets/assets/fonts/source-sans-pro.black.ttf": "438b0b18b6f174bb242d2435dbf31663",
"assets/assets/fonts/Inter-Regular.ttf": "b396b0594c9620bc6ad91c5c92f6db30",
"assets/assets/fonts/SourceSansPro-SemiBold.ttf": "c1b4f417cf21451e85a0baccbfd8edc8",
"assets/assets/images/empty.json": "6099f7f42202262eda2ccf5a763605a7",
"assets/assets/images/app_logo_posibolt.png": "e8342263edd18351887641d8e6225610",
"assets/assets/images/company_icon.jpeg": "fe61ee2b343ace8ac1258573d4c94ee2",
"assets/assets/images/store.png": "f3847a66a8d9a30fcf803e0027840852",
"assets/assets/images/app_icon.png": "29bc1641ef0dd45b7a83c2d9be676ac8",
"assets/assets/images/hand_icon.png": "287abd259ae2ef4ccee9ecba59378cc9",
"assets/assets/images/point.png": "a6cc31d1e12d419423ce922e9bade998",
"assets/assets/images/user_icon.svg": "6b619ea4122a65a19a8883aca9ad483d",
"assets/assets/images/home_screen_image.svg": "569fa1776d64eaae0456be695842e5e7",
"assets/assets/images/no_internet_connection.svg": "dc0e853218271999b09613e759afa3a4",
"assets/assets/images/cash-counter.png": "c63989458b111eb0552009f93972d2c1",
"assets/assets/images/barcode.png": "2973a24196401ce6621ea96734b128ba",
"assets/assets/images/app_logo_defacto.png": "91fee6d7a611583d8ab6ffc66375317a",
"assets/assets/images/mobile-payment.png": "0bf0f16a82f518fdf96006f20729b0ce",
"assets/assets/images/app_icon_maqsoud.jpeg": "4d6533198913805c3808cad1e29b1061",
"assets/assets/images/app_logo_maqsoud.jpg": "cdad401491ff8bc864ba095f6fdabb47",
"assets/assets/images/bottom_bar_indicator.svg": "ac70392b8ceae562a88a0c44f88613f0",
"assets/assets/images/poweredBy_posibolt_image.png": "d4cf5d7f390d859d773a4a7c77284918",
"assets/assets/images/voucher.png": "330c613b4de28e9134e2ff7f75bdb5ce",
"assets/assets/images/gift-card.png": "2a52861910aef8d0263212f817d466ed",
"assets/assets/images/online-shopping.png": "5f744fbc2d95aaa855b6be79a4656d0a",
"assets/assets/images/company_icon.png": "3e3ea35632b44241da1873c200961b33",
"assets/assets/images/value.png": "33642ec0f7cb3a0958a6d92817927263",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "fd9339ed45c8652cc9edb208ae58bcc3",
"assets/AssetManifest.json": "cb0ab25354c7648d7bc7c98d3e6d0ab5",
"assets/FontManifest.json": "f9bb2850d19bda3e2f4c7564c04a38d0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "daf181011e135ef4f8f30e38cacc36f4",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"flutter.js": "f393d3c16b631f36852323de8e583132"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
