const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const studentRoutes = require('./routes/students');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
 res.send('Marksheet API running');
});

const PORT = 3000;
app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
