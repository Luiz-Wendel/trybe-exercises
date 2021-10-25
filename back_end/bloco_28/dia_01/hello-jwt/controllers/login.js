const jwt = require('jsonwebtoken');

const isAdmin = ({ username, password }) => username === 'admin' && password === 's3nh4S3gur4???';

module.exports = (req, res) => {
  const { username, password } = req.body;
  const { JWT_SECRET: secret } = process.env;

  const jwtConfig = {
    expiresIn: '1h',
    algorithm: 'HS256',
  };

  const jwtPayload = {
    username,
    admin: false,
  };

  if (isAdmin({ username, password })) jwtPayload.admin = true;

  const token = jwt.sign(jwtPayload, secret, jwtConfig);

  return res.status(200).json({ token });
};
