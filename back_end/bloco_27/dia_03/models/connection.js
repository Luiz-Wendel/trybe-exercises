let connection;

switch (process.env.DB_SOFTWARE) {
  case 'mongo':
    const { MongoClient } = require('mongodb');

    const OPTIONS = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };

    const MONGO_DB_URL = 'mongodb://127.0.0.1:27017';

    let db = null;

    connection = () => {
      return db
        ? Promise.resolve(db)
        : MongoClient.connect(MONGO_DB_URL, OPTIONS)
            .then((conn) => {
              db = conn.db('exercises_27_3');
              return db;
            });
    };

    break;

  default:
    const mysql = require('mysql2/promise');

    const {
      MYSQL_HOST: host,
      MYSQL_USER: user,
      MYSQL_PASSWORD: password,
      MYSQL_DB: database
    } = process.env;

    connection = mysql.createPool({
      host,
      user,
      password,
      database,
    });

    break;
}

module.exports = connection;
