const readlineSync = require('readline-sync');
 
const userWeight = readlineSync.questionFloat('What\'s your weight? ');
const userHeight = readlineSync.question('What\'s your height? ');

const imc = (weight = 80, height = 190) => {
  const heightInMeters = height > 5 ? height / 100 : height;

  const imcValue = weight / (heightInMeters ** 2);

  console.log(imcValue);

  if (imcValue < 18.5) console.log('Abaixo do peso (magreza)');
  else if (imcValue < 25) console.log('Peso normal');
  else if (imcValue < 30) console.log('Acima do peso (sobrepeso)');
  else if (imcValue < 35) console.log('Obesidade grau I');
  else if (imcValue < 40) console.log('Obesidade grau II');
  else console.log('Obesidade graus III e IV');
};

imc(userWeight, userHeight);
