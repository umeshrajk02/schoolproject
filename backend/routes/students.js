const express = require('express');
const router = express.Router();
const db = require('../db');

// Add student
router.post('/', (req, res) => {
 const { name, math, science, english } = req.body;

 db.run(
   `INSERT INTO students (name, math, science, english) VALUES (?, ?, ?, ?)`,
   [name, math, science, english],
   function (err) {
     if (err) return res.status(500).send(err);
     res.send({ id: this.lastID });
   }
 );
});

// Search student
router.get('/', (req, res) => {
 const name = req.query.name;

 db.all(
   `SELECT * FROM students WHERE name LIKE ?`,
   [`%${name}%`],
   (err, rows) => {
     if (err) return res.status(500).send(err);
     res.send(rows);
   }
 );
});

module.exports = router;