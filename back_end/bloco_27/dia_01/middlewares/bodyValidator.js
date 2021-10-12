const { isValid, getValidationMessage } = require('../helpers/utils');

const requiredFields = {
  '/users': ['firstName', 'lastName', 'email', 'password'],
};

const bodyValidator = (req, res, next) => {
  const { body } = req;
  const bodyEntries = Object.entries(body);
  const bodyKeys = Object.keys(body);

  const bodyContainsAllRequiredFields = requiredFields[req.baseUrl]
    .every((field) => bodyKeys.includes(field));

  if (!bodyContainsAllRequiredFields) {
    return res
      .status(400)
      .json({
        error: true,
        message: 'Invalid request body fields!',
      });
  }

  let invalidMessage = '';

  for (let index = 0; index < bodyEntries.length; index += 1) {
    const [key, value] = bodyEntries[index];

    if (!isValid(key, value)) invalidMessage = getValidationMessage(key, value);
  }

  return invalidMessage.length > 0
    ? res.status(400).json({ error: true, message: invalidMessage })
    : next();
};

module.exports = bodyValidator;
