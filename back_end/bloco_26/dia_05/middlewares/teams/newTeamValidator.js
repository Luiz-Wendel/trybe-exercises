const { isValid } = require('../../helpers/utils');

const newTeamValidator = (req, res, next) => {
  const { name, initials, country } = req.body;

  return isValid('name', name) && isValid('initials', initials) && isValid('country', country)
    ? next()
    : res.status(400).json({ message: "Invalid data!" });
};

module.exports = newTeamValidator;
