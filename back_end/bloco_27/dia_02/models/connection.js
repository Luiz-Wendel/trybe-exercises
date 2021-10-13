const mysql = require('mysql2/promise');

const { MYSQL_HOST: host, MYSQL_USER: user, MYSQL_PASSWORD: password } = process.env;

const connection = mysql.createPool({
  host,
  user,
  password,
  database: 'cep_lookup',
});

module.exports = connection;
