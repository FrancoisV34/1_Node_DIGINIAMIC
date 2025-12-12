// services/todos.service.js
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'datas', 'todos.json');

const loadTodos = () => {
  try {
    const raw = fs.readFileSync(DB_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    return [];
  }
};

const saveTodos = (todos) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(todos, null, 2));
};

// Services

exports.getAll = () => {
  return loadTodos();
};

exports.getById = (id) => {
  const todos = loadTodos();
  return todos.find((t) => t.id === id);
};

exports.create = (data) => {
  const todos = loadTodos();
  const newTodo = {
    id: Date.now(),
    title: data.title,
    completed: data.completed ?? false,
  };
  todos.push(newTodo);
  saveTodos(todos);
  return newTodo;
};

exports.update = (id, data) => {
  const todos = loadTodos();
  const index = todos.findIndex((t) => t.id === id);
  if (index === -1) return null;

  todos[index] = {
    ...todos[index],
    title: data.title ?? todos[index].title,
    completed: data.completed ?? todos[index].completed,
  };

  saveTodos(todos);
  return todos[index];
};

exports.remove = (id) => {
  const todos = loadTodos();
  const initialLength = todos.length;

  const updated = todos.filter((t) => t.id !== id);
  if (updated.length === initialLength) return false;

  saveTodos(updated);
  return true;
};
