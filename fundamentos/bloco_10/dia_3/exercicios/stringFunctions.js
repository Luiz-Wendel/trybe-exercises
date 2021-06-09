const uppercase = (string) => string.toUpperCase();

const firstChar = (string) => string.slice(0, 1);

const concat = (firstString, secondString) => `${firstString}${secondString}`;

module.exports = { uppercase, firstChar, concat };
