self.addEventListener('install', function(event) {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', function(event) {
  var controlledPages;
  event.waitUntil(
    self.clients.claim().then(function() {
      return self.clients.matchAll({ type: 'window' });
    }).then(function(pages) {
      controlledPages = pages;
      return caches.keys();
    }).then(function(names) {
      var suffix = '-' + self.registration.scope;
      return Promise.all(names.filter(function(name) {
        return name.indexOf('workbox-') === 0 && name.slice(-suffix.length) === suffix;
      }).map(function(name) { return caches.delete(name); }));
    }).then(function() {
      return self.registration.unregister();
    }).then(function() {
      return Promise.all(controlledPages.map(function(client) {
        var url = new URL(client.url);
        if (url.href.indexOf(self.registration.scope) !== 0 || /^\/fe-[^/]+-docs(?:\/|$)/.test(url.pathname)) return;
        url.searchParams.set('__fe_recover', 'sw-20261009');
        return new Promise(function(resolve) {
          var channel = new MessageChannel();
          var timer = setTimeout(function() { finish(false); }, 800);
          function finish(deferred) {
            clearTimeout(timer);
            channel.port1.close();
            resolve(deferred);
          }
          channel.port1.onmessage = function(event) { finish(event.data === 'defer'); };
          client.postMessage({ type: 'fe-legacy-worker-retired' }, [channel.port2]);
        }).then(function(deferred) {
          if (deferred) return;
          return fetch(url.href, { method: 'HEAD', cache: 'no-store', credentials: 'same-origin' })
            .then(function(response) {
              if (response.ok && /text\/html/i.test(response.headers.get('content-type') || '')) {
                return client.navigate(url.href);
              }
            });
        }).catch(function() {});
      }));
    })
  );
});
