const fs = require('fs');

const errorsSchema = require('../schemas/errorsSchema');

module.exports = (req, res, next) => {
  const { username, password } = req.body;
  const path = 'models/data/users.json';

  const user = {
    username,
    password,
    admin: Math.floor(Math.random() * 100) > 50 ? true : false,
  };
  let users;

  try {
    if (fs.existsSync(path)) {
      users = JSON.parse(fs.readFileSync(path, 'utf-8'));

      if (users.some(({ username: existingUsername }) => existingUsername === username)) {
        return next(errorsSchema.users.already_exists);
      }

      pushUser(users);
    } else {
      users = [user];
    }
  } catch (error) {
    return next(error);
  }

  req.user = user;

  fs.writeFileSync(path, JSON.stringify(users));

  next();
};
