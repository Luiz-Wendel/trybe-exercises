const readlineSync = require('readline-sync');

const factorial = (number) => {
  if (number < 1) {
    return 'Number must be greater than 0';
  };

  return number !== 1 ? number + factorial(number - 1) : 1;
};

const getFactorial = (number) => console.log(factorial(number));

const userNumber = readlineSync.questionInt('Which number? ');

getFactorial(userNumber);
