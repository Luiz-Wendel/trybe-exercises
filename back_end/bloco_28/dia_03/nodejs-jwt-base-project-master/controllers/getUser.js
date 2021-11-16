const errors = require('../schemas/errorsSchema');

module.exports = async (req, res, next) => {
  const { user, params: { userId } } = req;

  if (user.id !== userId) next(errors.user.access_denied);

  return res.status(200).json({ message: 'ok' });
};
