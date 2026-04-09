const Database = require('better-sqlite3');

const db = new Database('./students.db');

db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    math INTEGER,
    science INTEGER,
    english INTEGER
  )
`);

module.exports = db;
