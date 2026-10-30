// Service worker minimal : il permet l'installation du site comme application.
// Il ne met rien en cache : les recettes et le menu restent toujours à jour.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
