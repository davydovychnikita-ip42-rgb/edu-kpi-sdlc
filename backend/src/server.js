require('dotenv').config();
const app = require('./app');
const initDatabase = require('./database/initDb');

const PORT = process.env.PORT || 5000;

initDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});