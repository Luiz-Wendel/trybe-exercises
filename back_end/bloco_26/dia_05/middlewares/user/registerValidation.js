const { isValid } = require('../../helpers/utils');

const registerValidation = (req, res, next) => {
  const { username, email, password } = req.body;

  return isValid('username', username) && isValid('email', email) && isValid('password', password)
    ? next()
    : res.status(400).json({ message: "Invalid data!" });
};

module.exports = registerValidation;
