const Joi = require('joi');

const validations = require('./validations');

module.exports = Joi.object({
  cep: Joi.string()
    .pattern(validations.cep)
    .required(),

  logradouro: Joi.string()
    .max(50)
    .required(),

  bairro: Joi.string()
    .max(20)
    .required(),

  localidade: Joi.string()
    .max(20)
    .required(),

  uf: Joi.string()
    .case('upper')
    .min(2)
    .max(2)
    .required(),
});
