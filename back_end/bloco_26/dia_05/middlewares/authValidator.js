const isValidToken = require('../helpers/isValidToken');

const authValidator = (req, res, next) => {
  const { authorization } = req.headers;

  return isValidToken(authorization)
    ? next()
    : res.status(401).json({ message: "Invalid token!" });
};

module.exports = authValidator;
