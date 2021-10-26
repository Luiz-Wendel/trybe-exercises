const errorsSchema = require('../../schemas/errorsSchema');

module.exports = (req, res, next) => {
  const { admin } = req.user;

  if (!admin) next(errorsSchema.access.forbidden);

  next();
};
