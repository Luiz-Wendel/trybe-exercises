const isValidToken = (token) => {
  const tokenRegex = /[\w\d]{12}/;

  return token && token.match(tokenRegex);
};

module.exports = isValidToken;
