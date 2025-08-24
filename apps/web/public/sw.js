self.addEventListener('install', e => { e.waitUntil(caches.open('hydraulic-cache-v1').then(c => c.addAll(['/','/jobs','/assets']))) })
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => { const c=res.clone(); caches.open('hydraulic-cache-v1').then(x=>x.put(e.request,c)); return res }).catch(()=>r))) })
