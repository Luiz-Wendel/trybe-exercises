const Ceps = require('../models/Ceps');

const getAll = () => Ceps.getAll();

const get = (cep) => Ceps.get(cep);

const create = async (cep) => {
  const validCep = {
    ...cep,
    cep: cep.cep.split('-').join(''),
  }

  const hasCep = await get(validCep.cep);

  if (hasCep) return { error: 'Already exists!' };

  return Ceps.create(validCep);
};

module.exports = {
  getAll,
  create,
};
