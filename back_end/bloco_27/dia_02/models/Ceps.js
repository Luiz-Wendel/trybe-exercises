const connection = require('./connection');

const getAll = async () => {
  const [ceps] = await connection.execute(
      'SELECT * FROM ceps;',
  );

  return ceps;
};

module.exports = {
  getAll,
};
