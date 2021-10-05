const isValidEmail = require('../../helpers/isValidEmail');
const isValidPassword = require('../../helpers/isValidPassword');

const loginValidation = (req, res, next) => {
  const { email, password } = req.body;

  return isValidEmail(email) && isValidPassword(password)
    ? next()
    : res.status(400).json({ message: "Email or password is incorrect!" });
};

module.exports = loginValidation;
