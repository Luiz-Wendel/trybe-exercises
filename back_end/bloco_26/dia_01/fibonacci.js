const readlineSync = require('readline-sync');

const userNumber = readlineSync.questionInt('Fibonacci length? ');

const fibonacci = (length) => {
  if (length < 2) return 'Length must be greater than 1!';

  const fibonacciValues = [0, 1];

  while (fibonacciValues.length < length) {
    const firstValue = fibonacciValues[fibonacciValues.length - 1];
    const secondValue = fibonacciValues[fibonacciValues.length - 2];
    const newValue = firstValue + secondValue;

    fibonacciValues.push(newValue);
  }

  return fibonacciValues;
};

const getFibonacci = (number) => console.log(fibonacci(number));

getFibonacci(userNumber);
