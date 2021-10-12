const connection = require('./connection');

const getAll = async () => {
  const [ceps] = await connection.execute(
      'SELECT * FROM ceps;',
  );

  return ceps;
};

const get = async (cep) => {
  const [cepData] = await connection.execute(
    'SELECT * FROM ceps WHERE cep = ?',
    [cep],
  );

  if (cepData.length === 0) return null;

  return cepData[0];
};

const create = async ({ cep, logradouro, bairro, localidade, uf }) => await connection.execute(
    'INSERT INTO ceps(cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?);',
    [cep, logradouro, bairro, localidade, uf],
);

module.exports = {
  getAll,
  get,
  create,
};
