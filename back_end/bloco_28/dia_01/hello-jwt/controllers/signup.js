const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username, admin } = req.user;
  const { JWT_SECRET: secret } = process.env;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const jwtPayload = {
    username,
    admin,
  };

  const token = jwt.sign(jwtPayload, secret, jwtConfig);

  return res.status(201).json({ token });
};
