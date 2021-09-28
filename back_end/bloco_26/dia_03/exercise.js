const numberType = (number) => {
  if (typeof number !== 'number') throw new Error('Parameter must be a number!');

  if (number > 0) return 'positive';

  if (number < 0) return 'negative';

  return 'neutral';
};

module.exports = numberType;
