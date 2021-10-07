const { isValid } = require('../../helpers/utils');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  return isValid('email', email) && isValid('password', password)
    ? next()
    : res.status(400).json({ message: "Email or password is incorrect!" });
};

module.exports = loginValidation;
