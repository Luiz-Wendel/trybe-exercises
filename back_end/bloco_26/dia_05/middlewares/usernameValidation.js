const usernameValidation = (req, res, next) => {
  const { username } = req.body;
  const minimalLength = 3;

  if (!username || username.length < minimalLength) {
    return res.status(400).json({ message: "Invalid data!" });
  }

  next();
};

module.exports = usernameValidation;