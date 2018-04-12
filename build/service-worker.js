"use strict";var precacheConfig=[["/index.html","c2fa35d8050122f5676390a66319bc65"],["/static/js/main.31119499.js","3634f892f2da99345d23ee644b254cb5"],["/static/media/androidIcon.d76edf2d.png","d76edf2d575fea9dcb132d9d745b0b4c"],["/static/media/backend.f5e8143b.png","f5e8143bafb472867acc920a0941d989"],["/static/media/cssIcon.ba318fc5.png","ba318fc5f1737b1d0c325632527ddaee"],["/static/media/expoIcon.c025165e.png","c025165edc0d162405bc418a75b171c5"],["/static/media/githubIcon.99bb86d5.png","99bb86d559602b90af96c164275002c9"],["/static/media/gitlogo.db90d50f.png","db90d50f224d5bb999759f9e0ee92417"],["/static/media/htmlIcon.8a63c1e8.png","8a63c1e8c555f538ea1ed68ff62b39c8"],["/static/media/iosIcon.9a5dca5d.png","9a5dca5dcf57ddedf63501153b87d033"],["/static/media/jqueryIcon.9d061479.png","9d06147929380c110052a9a29651fcb6"],["/static/media/jsIcon.1d9414b0.png","1d9414b08423b5687d3945a5e38cb29b"],["/static/media/linkedin.9d09860e.png","9d09860e40f8b9c38a55036b097aff88"],["/static/media/liveIcon.bc4b16ec.png","bc4b16ec21c9046fb853c81fdc167bbf"],["/static/media/mainBG.c0389dd4.png","c0389dd4a132e0b945ecdd4bd823cef9"],["/static/media/mongoIcon.66b129d2.png","66b129d2bcddf75c1bf4422c2311ea33"],["/static/media/nodeIcon.c3fa718d.png","c3fa718d734a74fb0ad9629c43d202ae"],["/static/media/react.9e2c387b.png","9e2c387b070556df9f7f1c85f1e46dcf"],["/static/media/reduxIcon.afce7cff.png","afce7cff91dc498b592d0dd8c860556b"],["/static/media/rnIcon.b75e1ccc.png","b75e1cccee37e71d8c815a1693ede951"],["/static/media/scp1.630aa43f.png","630aa43fe3e0cff6a74c3d858253493d"],["/static/media/scp2.5b50e4d8.png","5b50e4d83c5b323c029fc65f6155f2a9"],["/static/media/scp3.fb8870d2.png","fb8870d26b248f6a25bf6b13f3843109"],["/static/media/scp4.78716bfd.png","78716bfd39e85f8a51c45ec2017c0d8e"],["/static/media/scp5.ae6c58a8.png","ae6c58a84523e07c39f9ef456b37722c"],["/static/media/sqlIcon.924a0af0.png","924a0af05d8b9643c693cc28cb317584"],["/static/media/tnt1.9642845c.jpg","9642845c26c5f4177eec0f4edcfcf47a"],["/static/media/tnt2.dbb57bb4.jpg","dbb57bb4fe401c05a523695880ad4987"],["/static/media/tnt3.edb80d73.jpg","edb80d730c06387d4223215f500ebbad"],["/static/media/tnt4.b954633d.jpg","b954633d5ddbded216ef09dcc7f67bdb"],["/static/media/tnt5.3b746303.jpg","3b7463039c28422811a2f733566b0e5d"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});