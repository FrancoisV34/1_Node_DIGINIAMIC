// const http = require('http');
// const fs = require('fs');
// const path = require('path');
// const { parse } = require('url');

// //chemin DB
// const DB_PATH = path.join(__dirname, 'datas', 'todos.json');
// console.log(DB_PATH);

// const loadTodos = () => {
//   try {
//     // ReadFileSync est une fonction synchrone qui permet de lire le fichier JSON
//     // cela veut dire que le code va attendre que le fichier soit lu avant de continuer
//     // Pour être certain que le fichier soit lu, on utilise readFileSync
//     const raw = fs.readFileSync(DB_PATH, 'utf-8');
//     // On parse le fichier JSON en un tableau (Vous pouvez console.log(raw) pour voir le contenu du fichier)
//     const parsed = JSON.parse(raw);
//     // On retourne le tableau en s'assurant qu'il est un tableau
//     return Array.isArray(parsed) ? parsed : [];
//   } catch (err) {
//     // En cas d'erreur, on affiche un message d'erreur et on retourne un tableau vide
//     console.error(`Impossible de lire ${DB_PATH}, tableau vide`, err);
//     return [];
//   }
// };
// loadTodos();
// console.log(loadTodos());

// const sendJSON = (res, status, data) => {
//   res.writeHead(status, { 'Content-Type': 'application/json' });
//   res.end(JSON.stringify(data));
// };

// const server = http.createServer((req, res) => {
//   const urlParts = req.url.split('/').filter(Boolean); // ex: "/api/todos/3" -> ["api","todos","3"]
//   const method = req.method;
//   // ROUTE: GET / (homepage)
//   if (method === 'GET' && req.url === '/') {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     return res.end(`
//       <h1>Bienvenue sur l'API Todos</h1>
//       <p>Routes disponibles :</p>
//       <ul>
//         <li>GET /api/todos</li>
//         <li>GET /api/todos/:id</li>
//         <li>POST /api/todos</li>
//         <li>PUT /api/todos/:id</li>
//         <li>DELETE /api/todos/:id</li>
//       </ul>
//     `);
//   }

//   // ROUTE: GET /api/todos
//   if (method === 'GET' && req.url === '/api/todos') {
//     return sendJSON(res, 200, loadTodos());
//   }

//   // ROUTE: GET /api/todos/:id
//   if (
//     method === 'GET' &&
//     urlParts[0] === 'api' &&
//     urlParts[1] === 'todos' &&
//     urlParts[2]
//   ) {
//     const id = parseInt(urlParts[2], 10);
//     const todo = todos.find((t) => t.id === id);

//     if (!todo) return sendJSON(res, 404, { error: 'Todo non trouvé' });
//     return sendJSON(res, 200, todo);
//   }

//   // ROUTE: POST /api/todos
//   if (method === 'POST' && req.url === '/api/todos') {
//     let body = '';

//     req.on('data', (chunk) => (body += chunk));

//     req.on('end', () => {
//       try {
//         const data = JSON.parse(body);

//         if (!data.title) {
//           return sendJSON(res, 400, { error: "Le champ 'title' est requis" });
//         }

//         const newTodo = {
//           id: Date.now(),
//           title: data.title,
//           completed: data.completed ?? false,
//         };

//         todos.push(newTodo);
//         return sendJSON(res, 201, newTodo);
//       } catch {
//         return sendJSON(res, 400, { error: 'JSON invalide' });
//       }
//     });

//     return;
//   }

//   // ROUTE: PUT /api/todos/:id
//   if (
//     method === 'PUT' &&
//     urlParts[0] === 'api' &&
//     urlParts[1] === 'todos' &&
//     urlParts[2]
//   ) {
//     const id = parseInt(urlParts[2], 10);
//     let body = '';

//     req.on('data', (chunk) => (body += chunk));

//     req.on('end', () => {
//       try {
//         const data = JSON.parse(body);
//         const index = todos.findIndex((t) => t.id === id);

//         if (index === -1)
//           return sendJSON(res, 404, { error: 'Todo non trouvé' });

//         todos[index] = {
//           ...todos[index],
//           title: data.title ?? todos[index].title,
//           completed: data.completed ?? todos[index].completed,
//         };

//         return sendJSON(res, 200, todos[index]);
//       } catch {
//         return sendJSON(res, 400, { error: 'JSON invalide' });
//       }
//     });

//     return;
//   }

//   // ROUTE: DELETE /api/todos/:id
//   if (
//     method === 'DELETE' &&
//     urlParts[0] === 'api' &&
//     urlParts[1] === 'todos' &&
//     urlParts[2]
//   ) {
//     const id = parseInt(urlParts[2], 10);
//     const initialLength = todos.length;

//     todos = todos.filter((t) => t.id !== id);

//     if (todos.length === initialLength) {
//       return sendJSON(res, 404, { error: 'Todo non trouvé' });
//     }

//     res.writeHead(204);
//     return res.end();
//   }

//   // ROUTE NON TROUVÉE
//   sendJSON(res, 404, { error: 'Route non trouvée' });
// });

// server.listen(3000, () => {
//   console.log('Serveur démarré sur http://localhost:3000');
// });
