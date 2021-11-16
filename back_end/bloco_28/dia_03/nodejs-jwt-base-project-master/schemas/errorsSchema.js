const statusCodes = require('./statusCodesSchema');

module.exports = {
  jwt: {
    not_found: {
      statusCode: statusCodes.badRequest,
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
    not_found: {
      statusCode: statusCodes.notFound,
      info: {
        code: 'not_found',
        message: 'User not found',
      },
    },
  },
};
