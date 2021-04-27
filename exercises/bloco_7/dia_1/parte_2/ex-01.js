const integer = 5;

const factorial = (number) => number === 1 ? number : number * factorial(number - 1);

console.log(`Factorial of ${integer} is: ${factorial(integer)}`);
