// services/tp.service.js
const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'datas', 'tp.datas.json');

const loadItems = () => {
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
  return loadItems();
};

exports.getById = (id) => {
  const todos = loadItems();
  return todos.find((t) => t.id === id);
};

exports.create = (data) => {
  const items = loadItems();
  const lastId = items.length > 0 ? items[items.length - 1].id : 0;
  const newItem = {
    id: lastId + 1,
    name: data.name,
    description: data.description,
  };
  items.push(newItem);
  saveTodos(items);
  return newItem;
};

exports.update = (id, data) => {
  const todos = loadItems();
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
  const todos = loadItems();
  const initialLength = todos.length;

  const updated = todos.filter((t) => t.id !== id);
  if (updated.length === initialLength) return false;

  saveTodos(updated);
  return true;
};
