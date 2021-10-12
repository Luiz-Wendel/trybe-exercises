const Ceps = require('../services/Ceps');

module.exports = {
  get: async (req, res) => {
    const { cep } = req.params;

    const ceps = await Ceps.getAll();

    const foundCep = ceps.find((availableCep) => availableCep.cep === cep);

    if (!foundCep) {
      return res.status(404).json({
        error: {
          code: "notFound",
          message: "CEP não encontrado!",
        },
      });
    }

    return res.status(200).json({ ...foundCep });
  },
};
