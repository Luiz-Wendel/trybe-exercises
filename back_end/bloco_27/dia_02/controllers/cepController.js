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

  post: async (req, res) => {
    const { validCep } = req;

    const created = await Ceps.create(validCep);

    if (created.error) return res.status(409).json({
      error: {
        code: 'alreadyExists',
        message: 'CEP já existente!',
      },
    });

    return res.status(201).json({ ...validCep });
  },
};
