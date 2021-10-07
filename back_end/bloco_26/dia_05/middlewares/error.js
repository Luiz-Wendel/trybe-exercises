const error = (error, _req, res, _next) => {
  return res.status(error.statusCode).json({ message: error.message });
};

module.exports = error;
