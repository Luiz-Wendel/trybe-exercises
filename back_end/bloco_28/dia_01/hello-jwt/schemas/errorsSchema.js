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
  users: {
    already_exists: {
      statusCode: 409,
      message: 'User already exists',
    },
  },
};
