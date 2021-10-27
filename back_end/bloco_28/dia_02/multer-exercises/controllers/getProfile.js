const fs = require('fs');

module.exports = (req, res) => {
  const { id } = req.params;
  const fileName = 'profiles.json';
  const not_found = { message: 'Profile not found' };
  let error = false;
  let user;

  if (!fs.existsSync(fileName)) error = true;

  if (!error) {
    const users = JSON.parse(fs.readFileSync(fileName)) || [];
  
    user = users.find(({ id: userId }) => userId === id);

    if (!user) error = true;
  }

  return error ? res.status(404).json({ error: not_found }) : res.status(201).json(user);
};
