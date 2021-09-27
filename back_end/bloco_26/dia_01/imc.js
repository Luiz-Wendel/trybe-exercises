var readlineSync = require('readline-sync');
 
var userWeight = readlineSync.questionFloat('What\'s your weight? ');
var userHeight = readlineSync.question('What\'s your height? ');

const imc = (weight = 80, height = 190) => {
  const heightInMeters = height > 5 ? height / 100 : height;

  return weight / (heightInMeters ** 2);
};

console.log(imc(userWeight, userHeight));
