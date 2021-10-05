const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const minimalLength = 4;
  const maxlLength = 8;

  if (!password || password.length < minimalLength || password.length > 8) {
    return res.status(400).json({ message: "Invalid data!" });
  }

  next();
};

module.exports = passwordValidation;
