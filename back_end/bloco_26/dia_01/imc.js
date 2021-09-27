const imc = (weight = 80, height = 190) => {
  const heightInMeters = height > 5 ? height / 100 : height;

  return weight / (heightInMeters ** 2);
};

module.exports = imc;
