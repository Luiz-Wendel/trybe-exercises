module.exports = ({ statusCode, info }, _req, res, _next) => {
  let status = 500;
  let error = {
    code: 'internal_error',
    message: 'Something went wrong! Please, try again later.',
  };

  if (statusCode) {
    status = statusCode;
    error = { ...info };
  }

  return res.status(status).json(error);
};
