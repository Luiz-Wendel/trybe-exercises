const isValidUsername = (username) => {
  const minimalLength = 3;

  return username && username.length >= minimalLength;
};

module.exports = isValidUsername;
