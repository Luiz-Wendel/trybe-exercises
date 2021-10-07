const validations = {
  username: /(.){3,}/,
  email: /[\w\d.+_-]+@[\w]+.com/,
  password: /^(.){4,8}$/,
  token: /[\w\d]{12}/,
  name: /(.){6,}/,
  initials: /^[A-Z]{1,3}$/,
  country: /(.){4,}/,
};

const isValid = (type, value) => value && value.toString().match(validations[type]);

module.exports = { isValid };
