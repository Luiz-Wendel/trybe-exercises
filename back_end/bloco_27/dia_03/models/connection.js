const mysql = require('mysql2/promise');

const {
  MYSQL_HOST: host,
  MYSQL_USER: user,
  MYSQL_PASSWORD: password,
  MYSQL_DB: database
} = process.env;

const connection = mysql.createPool({
  host,
  user,
  password,
  database,
});

module.exports = connection;
