const jwt = require('jsonwebtoken');

const errorsSchema = require('../../schemas/errorsSchema');

module.exports = (req, res, next) => {
  const { authorization: token } = req.headers;

  if (!token) next(errorsSchema.jwt.not_found);

  try {
    const { JWT_SECRET: secret } = process.env;

    const data = jwt.verify(token, secret);

    req.user = data;

    next();
  } catch (error) {
    return res.status(401).json({ message: error.message });
  }
};
