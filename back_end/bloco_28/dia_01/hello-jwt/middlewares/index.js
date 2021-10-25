const error = require('./error');
const loginValidator = require('./validations/loginValidator');
const jwtAuth = require('./auth/jwtAuth');
const isAdmin = require('./auth/isAdmin');

module.exports = {
  error,
  loginValidator,
  jwtAuth,
  isAdmin,
};
