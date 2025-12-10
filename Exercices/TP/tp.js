const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');
const os = require('os');
const dns = require('dns');

const SSL_OPTIONS = {
  key: fs.readFileSync(path.join(__dirname, 'certif', 'key.pem')),
  cert: fs.readFileSync(path.join(__dirname, 'certif', 'cert.pem')),
};

const PORT = 3001;
const STATIC_FOLDER = path.join(__dirname, 'staticdir');

console.log(STATIC_FOLDER);
console.log(SSL_OPTIONS);

if (!fs.existsSync(STATIC_FOLDER)) {
  fs.mkdirSync(STATIC_FOLDER);
}

// Créer un fichier index.html par défaut (mis à jour pour HTTPS)
const defaultHtml = `
<!DOCTYPE html>
<html>
<head>
  <title>Serveur Node.js (HTTPS)</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <h1>Bienvenue sur le serveur Node.js (HTTPS)</h1>
  <p>🔒 Ce site est sécurisé avec HTTPS. Ton navigateur devrait afficher un cadenas vert.</p>
  <nav>
      <a href="/">Accueil</a> |
      <a href="/status">Statut système</a> |
      <a href="/resolve?domain=google.com">Résoudre DNS</a>
  </nav>
  <div id="realtime-data"></div>
  <script src="/script.js"></script>
</body>
</html>
`;

const defaultCss = `
body {
  font-family: Arial, sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  line-height: 1.6;
}
#realtime-data {
  margin-top: 20px;
  padding: 15px;
  background: #f0f0f0;
  border-radius: 5px;
}
`;

fs.writeFileSync(path.join(STATIC_FOLDER, 'index.html'), defaultHtml);
fs.writeFileSync(path.join(STATIC_FOLDER, 'style.css'), defaultCss);
fs.writeFileSync(path.join(STATIC_FOLDER, 'script.js'), '');

// Fonction pour servir les fichiers statiques (inchangée)
function serveStaticFile(filePath, res) {
  const extname = path.extname(filePath);
  let contentType = 'text/html; charset=UTF-8';

  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(
          '<h1>404 Not Found</h1><p>The requested resource could not be found.</p>',
          'utf-8'
        );
      } else {
        res.writeHead(500, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end(`<h1>500 Internal Server Error</h1><p>Error: ${err.code}</p>`);
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
}

let cpuUsage = 0;
let memoryUsage = 0;
let uptime = 0;

// Fonction pour calculer l'utilisation CPU (inchangée)
function getCPUUsage() {
  const cpus = os.cpus();
  let total = 0;
  for (let i = 0, len = cpus.length; i < len; i++) {
    const cpu = cpus[i];
    for (const type in cpu.times) {
      total += cpu.times[type];
    }
  }
  return total;
}

setInterval(() => {
  const startUsage = getCPUUsage();
  const startTime = process.hrtime();
  setTimeout(() => {
    const endUsage = getCPUUsage();
    const endTime = process.hrtime(startTime);
    const elapsedMs = endTime[0] * 1000 + endTime[1] / 1000000;
    cpuUsage = ((endUsage - startUsage) / (elapsedMs * 1000)) * 100;
    memoryUsage = ((os.totalmem() - os.freemem()) / os.totalmem()) * 100;
    uptime = process.uptime();
  }, 1000);
}, 1000);

// Créer le serveur HTTPS (au lieu de HTTP)
const server = https.createServer(SSL_OPTIONS, (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname =
    parsedUrl.pathname === '/' ? '/index.html' : parsedUrl.pathname;
  const filePath = path.join(STATIC_FOLDER, pathname);

  // Routes spéciales
  if (pathname.startsWith('/status')) {
    setInterval(() => {}, 1000);
    return handleStatusRoute(req, res, parsedUrl);
  } else if (pathname.startsWith('/resolve')) {
    return handleResolveRoute(req, res, parsedUrl);
  } else if (pathname === '/sse') {
    return handleSSERoute(req, res);
  }

  // Servir les fichiers statiques
  serveStaticFile(filePath, res);
});

function handleStatusRoute(req, res, parsedUrl) {
  res.writeHead(200, {
    'Content-Type': 'text/html; charset=utf-8',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });

  res.end(`
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8" />
          <title>System Status (HTTPS)</title>
          <link rel="stylesheet" href="/style.css">
          <script>
              const eventSource = new EventSource('/sse');
              eventSource.onmessage = function(e) {
                  const data = JSON.parse(e.data);
                  document.getElementById('cpu-usage').textContent = data.cpuUsage.toFixed(2) + '%';
                  document.getElementById('memory-usage').textContent = data.memoryUsage.toFixed(2) + '%';
                  document.getElementById('uptime').textContent = data.uptime.toFixed(2) + 's';
              };
              eventSource.onerror = function() {
                  console.error('EventSource failed.');
              };
          </script>
      </head>
      <body>
          <h1>System Status (HTTPS)</h1>
          <div id="realtime-data">
              <p>CPU Usage: <span id="cpu-usage">0%</span></p>
              <p>Memory Usage: <span id="memory-usage">0%</span></p>
              <p>Uptime: <span id="uptime">0s</span></p>
          </div>
          <p><a href="/">Retour à l'accueil</a></p>
      </body>
      </html>
  `);
}

// Gestion du flux SSE (inchangé)
function handleSSERoute(req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
    'Access-Control-Allow-Origin': '*',
  });

  sendSSEData(res);
  const intervalId = setInterval(() => {
    sendSSEData(res);
  }, 1000);

  req.on('close', () => {
    clearInterval(intervalId);
  });
}

function sendSSEData(res) {
  res.write(
    `data: ${JSON.stringify({
      cpuUsage: cpuUsage,
      memoryUsage: memoryUsage,
      uptime: uptime,
    })}\n\n`
  );
}

// Gestion de la route /resolve (inchangée)
function handleResolveRoute(req, res, parsedUrl) {
  const domain = parsedUrl.query.domain;

  if (!domain) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    return res.end(`
          <h1>404 Bad Request</h1>
          <p>Le paramètre 'domain' est requis.</p>
          <p>Exemple: <a href="/resolve?domain=google.com">/resolve?domain=google.com</a></p>
      `);
  }

  let inputUrl;
  try {
    if (!/^https?:\/\//i.test(domain)) {
      inputUrl = new URL(`https://${domain}`); // <-- On utilise HTTPS par défaut
    } else {
      inputUrl = new URL(domain);
    }
  } catch (err) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
    return res.end(`
          <h1>404 Bad Request</h1>
          <p>URL invalide: ${domain}</p>
          <p>Erreur: ${err.message}</p>
          <p>Exemple valide: <a href="/resolve?domain=google.com">google.com</a></p>
      `);
  }

  dns.resolve(inputUrl.hostname, (err, addresses) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/html; charset=UTF-8' });
      return res.end(`
              <h1>500 Internal Server Error</h1>
              <p>Impossible de résoudre le domaine: ${inputUrl.hostname}</p>
              <p>Erreur: ${err.message}</p>
          `);
    }

    dns.resolveMx(inputUrl.hostname, (mxErr, mxAddresses) => {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
      res.end(`
              <!DOCTYPE html>
              <html>
              <head>
                  <title>DNS Resolution (HTTPS)</title>
                  <link rel="stylesheet" href="/style.css">
              </head>
              <body>
                  <h1>Résolution DNS pour ${inputUrl.hostname}</h1>
                  <h2>Adresses IP (A/AAAA):</h2>
                  <ul>
                      ${addresses.map((ip) => `<li>${ip}</li>`).join('')}
                  </ul>
                  <h2>Serveurs de mail (MX):</h2>
                  <ul>
                      ${
                        mxErr
                          ? '<li>Aucun enregistrement MX trouvé ou erreur lors de la résolution</li>'
                          : mxAddresses
                              .map(
                                (mx) =>
                                  `<li>${mx.exchange} (Priorité: ${mx.priority})</li>`
                              )
                              .join('')
                      }
                  </ul>
                  <p><a href="/">Retour à l'accueil</a></p>
              </body>
              </html>
          `);
    });
  });
}

// Démarrer le serveur HTTPS
server.listen(PORT, () => {
  console.log(`Server running at https://localhost:${PORT}/`); // <-- Note le "https://"
});
