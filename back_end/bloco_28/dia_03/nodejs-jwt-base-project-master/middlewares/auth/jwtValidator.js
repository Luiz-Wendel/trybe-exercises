const jwt = require('jwt-simple');

const errors = require('../../schemas/errorsSchema');

module.exports = (req, _res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return next(errors.jwt.not_found);

  try {
    const payload = jwt.decode(authorization, 'secret');

    req.user = payload;
  } catch (error) {
    return next(error);
  }

  return next();
};
