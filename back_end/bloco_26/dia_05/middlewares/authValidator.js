const { isValid } = require('../helpers/utils');

const authValidator = (req, res, next) => {
  const { authorization } = req.headers;

  return isValid('token', authorization)
    ? next()
    : res.status(401).json({ message: "Invalid token!" });
};

module.exports = authValidator;
