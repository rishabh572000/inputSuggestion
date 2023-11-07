let cashData='appV1'

this.addEventListener('install', (event)=>{
event.watchUntil(
    caches.open(cashData).then((cache)=>{
cache.addAll([
    '/static/js/bundle.js',
    '/',
    // '/index.html',
    '/Offline.js',
])
    })
)
})

this.addEventListener('fetch', (event)=>{
    // if(!navigator.onLine){
    //     write the bleo code
    // }
    event.respondWith(
        caches.match(event.request).then((result)=>{
            if(result){
                return result
            }
        })
    )
})