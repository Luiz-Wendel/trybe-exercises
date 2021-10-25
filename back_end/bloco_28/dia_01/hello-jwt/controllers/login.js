const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username } = req.body;
  const { JWT_SECRET: secret } = process.env;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const jwtPayload = {
    username,
    admin: false,
  };

  const token = jwt.sign(jwtPayload, secret, jwtConfig);

  return res.status(200).json({ token });
};
