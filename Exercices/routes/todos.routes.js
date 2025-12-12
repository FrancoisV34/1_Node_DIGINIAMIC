// routes/todos.routes.js
const controller = require('../controllers/todos.controller');

module.exports = (req, res) => {
  const urlParts = req.url.split('/').filter(Boolean);
  const method = req.method;

  // GET /api/todos
  if (method === 'GET' && req.url === '/api/todos') {
    return controller.getAllTodos(req, res);
  }

  // GET /api/todos/:id
  if (
    method === 'GET' &&
    urlParts[0] === 'api' &&
    urlParts[1] === 'todos' &&
    urlParts[2]
  ) {
    const id = parseInt(urlParts[2], 10);
    return controller.getTodoById(req, res, id);
  }

  // POST /api/todos
  if (method === 'POST' && req.url === '/api/todos') {
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => controller.createTodo(req, res, body));
    return;
  }

  // PUT /api/todos/:id
  if (
    method === 'PUT' &&
    urlParts[0] === 'api' &&
    urlParts[1] === 'todos' &&
    urlParts[2]
  ) {
    const id = parseInt(urlParts[2], 10);
    let body = '';
    req.on('data', (chunk) => (body += chunk));
    req.on('end', () => controller.updateTodo(req, res, id, body));
    return;
  }

  // DELETE /api/todos/:id
  if (
    method === 'DELETE' &&
    urlParts[0] === 'api' &&
    urlParts[1] === 'todos' &&
    urlParts[2]
  ) {
    const id = parseInt(urlParts[2], 10);
    return controller.deleteTodo(req, res, id);
  }

  return false; // Route non trouvée → index.js s’en chargera
};
