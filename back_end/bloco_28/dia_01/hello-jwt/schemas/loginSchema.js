const Joi = require('joi');

const minimalLength = 5;

module.exports = Joi.object({
  username: Joi.string()
    .alphanum()
    .min(minimalLength)
    .required(),

  password: Joi.string()
    .min(minimalLength)
    .required(),
});
