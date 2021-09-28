const numberType = (number) => {
  if (number > 0) return 'positive';

  if (number < 0) return 'negative';

  return 'neutral';
};

module.exports = numberType;
