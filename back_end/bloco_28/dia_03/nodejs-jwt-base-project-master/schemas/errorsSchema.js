const errorCodes = require('./errorCodesSchema');

module.exports = {
  jwt: {
    not_found: {
      statusCode: errorCodes.not_found,
      info: {
        code: 'not_found',
        message: 'Token not found or present',
      },
    },
  },
};
