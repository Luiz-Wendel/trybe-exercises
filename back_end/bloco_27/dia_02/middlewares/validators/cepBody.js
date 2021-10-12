const cepJoi = require('../../schemas/cepJoi');

module.exports = async (req, res, next) => {
  try {
    const validCep = await cepJoi.validateAsync(req.body);

    req.validCep = validCep;
  }
  catch (error) {
    next(error);
  }

  next();
};
