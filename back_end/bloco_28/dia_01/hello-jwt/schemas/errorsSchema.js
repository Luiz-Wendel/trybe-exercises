module.exports = {
  jwt: {
    not_found: {
      statusCode: 401,
      message: 'Token not found',
    },
  },
  access: {
    forbidden: {
      statusCode: 403,
      message: 'Restricted access',
    },
  },
};
