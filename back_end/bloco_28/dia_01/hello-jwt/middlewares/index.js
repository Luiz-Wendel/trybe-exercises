const error = require('./error');
const loginValidator = require('./validations/loginValidator');
const jwtAuth = require('./auth/jwtAuth');

module.exports = {
  error,
  loginValidator,
  jwtAuth,
};
