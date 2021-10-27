const fs = require('fs');

module.exports = (req, res) => {
  const { name, email, password, bio } = req.body;
  const { file: { filename } } = req;
  const user = { id: filename, name, email, password, bio };
  const fileName = 'profiles.json';

  if (fs.existsSync(fileName)) {
    const users = JSON.parse(fs.readFileSync(fileName)) || [];

    const newUsers = [...users, user];

    fs.writeFileSync(fileName, JSON.stringify(newUsers));
  } else {
    fs.writeFileSync(fileName, JSON.stringify([user]));
  }

  return res.status(201).json(user);
};
