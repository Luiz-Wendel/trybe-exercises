const Ceps = require('../models/Ceps');

const getAll = async () => Ceps.getAll();

module.exports = {
  getAll,
};
