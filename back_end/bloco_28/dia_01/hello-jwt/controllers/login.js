const fs = require('fs');
const jwt = require('jsonwebtoken');

module.exports = (req, res) => {
  const { username, password } = req.body;
  const path = 'models/data/users.json';

  try {
    if (fs.existsSync(path)) {
      users = JSON.parse(fs.readFileSync(path, 'utf-8'));

      const user = users.find(({ username: existingUsername }) => existingUsername === username);

      if (user && user.password === password) {
        const { JWT_SECRET: secret } = process.env;

        const jwtConfig = {
          expiresIn: '1h',
          algorithm: 'HS256',
        };

        const jwtPayload = {
          username: user.username,
          admin: user.admin,
        };

        const token = jwt.sign(jwtPayload, secret, jwtConfig);

        return res.status(200).json({ token });
      }
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  return res.status(404).json({ message: 'User not found' });
};
