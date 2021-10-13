const { isValid } = require('../../helpers/utils');

module.exports = (req, res, next) => {
  const { cep } = req.params;

  if (!isValid(Object.keys({ cep }), cep)) {
    return res.status(400).json({
      error: {
        code: 'invalidData',
        message: 'CEP inválido!',
      },
    });
  }

  next();
};
