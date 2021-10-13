const validations = require('../schemas/validations');

const isValid = (type, value) => value && value.toString().match(validations[type]);

module.exports = { isValid };
