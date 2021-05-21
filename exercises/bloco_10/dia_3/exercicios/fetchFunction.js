const fetch = require('node-fetch');

const breeds = async () => {
  try {
    const url = 'https://dog.ceo/api/breeds/list/all';

    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    return error;
  }
};

module.exports = { breeds };
