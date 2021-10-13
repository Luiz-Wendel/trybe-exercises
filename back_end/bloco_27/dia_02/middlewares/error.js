module.exports = (err, _req, res, _next) => {
  if (err.isJoi) {
    const { message } = err.details[0];

    return res.status(400).json({
      error: {
        code: 'invalidData',
        message,
      },
    });
  }

  const statusByErrorCode = {
    alreadyExists: 409,
  };

  const status = statusByErrorCode[err.code] || 500;

  return res.status(status).json({ error: { message: err.message } });
};
