const fs = require('fs');
const path = require('path');
const db = require('../config/db');

async function initDatabase() {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schemaSql = fs.readFileSync(schemaPath, 'utf8');
    await db.query(schemaSql);
    console.log('Database schema initialized successfully.');
  } catch (error) {
    console.error('Error initializing database schema:', error);
    process.exit(1);
  }
}

module.exports = initDatabase;