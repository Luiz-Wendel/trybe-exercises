const isValidUsername = require('../../helpers/isValidUsername');
const isValidEmail = require('../../helpers/isValidEmail');
const isValidPassword = require('../../helpers/isValidPassword');

const registerValidation = (req, res, next) => {
  const { username, email, password } = req.body;

  return isValidUsername(username) && isValidEmail(email) && isValidPassword(password)
    ? next()
    : res.status(400).json({ message: "Invalid data!" });
};

module.exports = registerValidation;
