const error = require('./error');
const loginValidator = require('./validations/loginValidator');
const jwtAuth = require('./auth/jwtAuth');
const isAdmin = require('./auth/isAdmin');
const addUser = require('./addUser');

module.exports = {
  error,
  loginValidator,
  jwtAuth,
  isAdmin,
  addUser,
};
