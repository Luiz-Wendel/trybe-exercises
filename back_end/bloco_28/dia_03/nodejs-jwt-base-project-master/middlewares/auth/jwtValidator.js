const errors = require('../../schemas/errorsSchema');

module.exports = (req, _res, next) => {
  const { authentication } = req.headers;

  if (!authentication) next(errors.jwt.not_found);

  next();
};
