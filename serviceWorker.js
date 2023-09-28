const BrailleChat = "Braille Chat V1"
const assets = [
  "/",
  "/index.html",
  "/static/css/style.css",
  "/static/images/chat-left-dots.svg",
  "/static/js/app.js"
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(BrailleChat).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
