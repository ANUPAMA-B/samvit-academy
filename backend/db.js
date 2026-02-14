const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: process.env.DB_HOST || '127.0.0.1',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || 'root123@16',
  database: process.env.DB_NAME || 'samvit_abacus_db',
  waitForConnections: true,
  connectionLimit: 10,
});

module.exports = pool;
