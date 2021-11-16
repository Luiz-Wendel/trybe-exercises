const statusCodes = require('./statusCodesSchema');

module.exports = {
  jwt: {
    not_found: {
      statusCode: statusCodes.not_found,
      info: {
        code: 'not_found',
        message: 'Token not found or present',
      },
    },
  },
  user: {
    access_denied: {
      statusCode: statusCodes.unauthorized,
      info: {
        code: 'access_denied',
        message: 'Access denied',
      },
    },
  },
};
