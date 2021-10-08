const validations = {
  firstName: {
    regex: /[\w]{3,}/,
    message: {
      invalid: 'Field "firstName" should contain at least 3 characters (letters)!',
      empty: 'Missing required field "firstName"!',
    },
  },
  lastName: {
    regex: /[\w]{3,}/,
    message: {
      invalid: 'Field "lastName" should contain at least 3 characters!',
      empty: 'Missing required field "lastName"!',
    },
  },
  email: {
    regex: /[\w\d.+_-]+@[\w]+.com/,
    message: {
      invalid: 'Invalid email format!',
      empty: 'Missing required field "email"!',
    },
  },
  password: {
    regex: /(.){6,}/,
    message: {
      invalid: 'Field "password" should contain at least 6 characters!',
      empty: 'Missing required field "password"!',
    },
  },
};

const isValid = (type, value) => value && value.toString().match(validations[type].regex);

const getValidationMessage = (type, value) => value
  ? validations[type].message.invalid
  : validations[type].message.empty;

module.exports = { isValid, getValidationMessage };
