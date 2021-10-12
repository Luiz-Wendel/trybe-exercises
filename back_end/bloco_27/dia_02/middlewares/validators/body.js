module.exports = (req, res, next) => {
  if (!req.body) return res.status(400).json({
    error: {
      code: 'bodyNotFound',
      message: 'Este endpoint requer o "body" da requisição!',
    },
  });

  next();
};
