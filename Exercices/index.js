// index.js
const http = require('http');
const todosRouter = require('./routes/todos.routes');
const { sendJSON } = require('./utils/utils');

const server = http.createServer((req, res) => {
  // Homepage
  if (req.method === 'GET' && req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end(`
      <h1>Bienvenue sur l'API Todos</h1>
      <p>Endpoints disponibles :</p>
      <ul>
        <li>GET /api/todos</li>
        <li>GET /api/todos/:id</li>
        <li>POST /api/todos</li>
        <li>PUT /api/todos/:id</li>
        <li>DELETE /api/todos/:id</li>
      </ul>
    `);
  }

  // Sinon → router
  const handled = todosRouter(req, res);
  if (handled === false) {
    return sendJSON(res, 404, { error: 'Route non trouvée' });
  }
});

server.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
