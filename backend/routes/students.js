const express = require('express');
const router = express.Router();
const db = require('../db');

// Add student
router.post('/', (req, res) => {
 const { name, math, science, english } = req.body;

 const stmt = db.prepare(
   `INSERT INTO students (name, math, science, english) VALUES (?, ?, ?, ?)`
 );
 const result = stmt.run(name, math, science, english);
 res.send({ id: result.lastInsertRowid });
});

// Search student from DB
router.get('/', (req, res) => {
 const name = req.query.name;

 const stmt = db.prepare(
   `SELECT * FROM students WHERE name LIKE ?`
 );
 const rows = stmt.all(`%${name}%`);
 res.send(rows);
});

module.exports = router;
