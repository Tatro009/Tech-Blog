// Import the mysql2 package
const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost3001',
  user: 'root',
  password: '',
  database: 'techBlog_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Export the connection pool
module.exports = pool.promise();
