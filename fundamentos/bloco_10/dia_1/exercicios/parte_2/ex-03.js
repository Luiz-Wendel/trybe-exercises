const hydrate = (string) => {
  let stringNumbers = string.replace(/[^\d]/g, '').split('');

  let cups = stringNumbers.reduce((acc, number) => acc + parseInt(number, 10), 0);

  return cups === 1 ? `${cups} copo de água` : `${cups} copos de água`;
};

module.exports = hydrate;
