const loginSchema = require('../../schemas/loginSchema');

module.exports = (req, _res, next) => {
  const { body } = req;

  const { error } = loginSchema.validate(body);

  if (error) return next(error);

  next();
};
