const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const emailRegex = /[\w\d.+_-]+@[\w]+.com/;

  if (!email || !email.match(emailRegex)) {
    return res.status(400).json({ message: "Invalid data!" });
  }

  next();
};

module.exports = emailValidation;
