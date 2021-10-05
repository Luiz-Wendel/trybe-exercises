const isValidPassword = (password) => {
  const minimalLength = 4;
  const maxlLength = 8;

  return password && password.length >= minimalLength && password.length <= maxlLength;
};

module.exports = isValidPassword;
