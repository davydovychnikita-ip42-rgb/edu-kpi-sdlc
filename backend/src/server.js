require('dotenv').config();
const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const initDatabase = require('./database/initDb');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/v1/health', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.status(200).json({
      status: 'OK',
      service: 'Sviy do Svogo Backend',
      dbTime: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({ status: 'ERROR', message: error.message });
  }
});

const PORT = process.env.PORT || 5000;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});