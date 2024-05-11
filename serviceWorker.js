

const CACHE_NAME = "cache-v1";
const urlsToCache = [
    '/',
    '/index.html',
    '/main.jsx',
    '/index.css',
    '/bar.svg',
    '/logo.png',
    '/bar.user.jpg',
    'https://fakestoreapi.com/products',
    'https://fakestoreapi.com/products/categories',
    'https://fakestoreapi.com/products/category/electronics',
    'https://fakestoreapi.com/products/category/jewelery',
    "https://fakestoreapi.com/products/category/men's clothing",
    "https://fakestoreapi.com/products/category/women's clothing"
]



self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                cache.addAll(urlsToCache)
            })
    )
})


self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((caches) => {
                return caches || fetch(event.request)
            })
    )
})



self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        caches.delete(cacheName);
                    }
                })
            )
        })
    )

})