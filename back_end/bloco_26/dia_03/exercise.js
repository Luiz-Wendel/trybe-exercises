const fs = require('fs');

const numberType = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter must be a number!');

  if (number > 0) return 'positive';

  if (number < 0) return 'negative';

  return 'neutral';
};

const writeToFile = (fileName, content) => {
  if (typeof fileName !== 'string' || typeof content !== 'string') {
    throw new Error('Parameters must be strings!');
  }

  fs.writeFileSync(`./${fileName}`, content);

  return 'ok';
};

module.exports = { numberType, writeToFile };
