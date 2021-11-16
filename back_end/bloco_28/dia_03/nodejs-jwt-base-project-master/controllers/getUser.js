const errors = require('../schemas/errorsSchema');
const User = require('../models/user');

module.exports = async (req, res, next) => {
  const { user, params: { userId } } = req;

  if (user.id !== userId) next(errors.user.access_denied);

  try {
    const existingUser = await User.findUser(user.username);

    if (!existingUser) next(errors.user.not_found);

    return res.status(200).json(existingUser);
  } catch (error) {
    return res.status(500).json({ message: 'Internal error', error: err.message });
  }
};
