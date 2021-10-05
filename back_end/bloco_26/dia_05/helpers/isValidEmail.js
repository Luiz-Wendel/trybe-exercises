const isValidEmail = (email) => {
  const emailRegex = /[\w\d.+_-]+@[\w]+.com/;

  return email && email.match(emailRegex);
};

module.exports = isValidEmail;
