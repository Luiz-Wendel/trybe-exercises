var twoNumbers = [2, 10];
var triangle = [45, 45, 90];
var chessPiece = 'Pawn';
var grade = 87;
var costPrice = 5;
var sellingPrice = 8;
var salary = 3000;

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

function subtraction(firstNumber, secondNumber) {
  return firstNumber - secondNumber;
}

function multiplication(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
  return firstNumber / secondNumber;
}

function mod(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}

console.log(`Sum: ${sum(...twoNumbers)}`);
console.log(`Subtraction: ${subtraction(...twoNumbers)}`);
console.log(`Multiplication: ${multiplication(...twoNumbers)}`);
console.log(`Division: ${division(...twoNumbers)}`);
console.log(`Mod: ${mod(...twoNumbers)}`);

function biggestNumber(firstNumber, secondNumber) {
  return firstNumber > secondNumber ? firstNumber : secondNumber;
}

console.log(`Biggest: ${biggestNumber(...twoNumbers)}`);

function biggestNumberOfThree(firstNumber, secondNumber, thirdNumber) {
  return firstNumber > secondNumber
    ? firstNumber > thirdNumber
      ? firstNumber
      : thirdNumber
    : secondNumber > thirdNumber
    ? secondNumber
    : thirdNumber;
}

console.log(`Biggest of three: ${biggestNumberOfThree(...twoNumbers, 3)}`);

function numberStatus(number) {
  return number > 0 ? 'positive' : number === 0 ? 'zero' : 'negative';
}

console.log(`Number status: ${numberStatus(twoNumbers[0])}`);

function isTriangle(firstAngle, secondAngle, thirdAngle) {
  return firstAngle + secondAngle + thirdAngle === 180 ? true : false;
}

console.log(`isTriangle: ${isTriangle(...triangle)}`);

function chessPieceMovement(piece) {
  piece = piece.toLowerCase();

  /*
    Chess pieces moves taken from: https://www.ichess.net/blog/chess-pieces-moves/
  */
  switch (piece) {
    case 'king':
      return `one square in any direction, so long as that square is not attacked by an enemy piece.`;
      break;
    case 'queen':
      return `diagonally, horizontally, or vertically any number of squares.`;
      break;
    case 'rook':
      return `horizontally or vertically any number of squares.`;
      break;
    case 'bishop':
      return `diagonally any number of squares.`;
      break;
    case 'knight':
      return `in an ‘L’ shape: two squares in a horizontal or vertical direction, then move one square horizontally or vertically.`;
      break;
    case 'pawn':
      return `vertically forward one square, with the option to move two squares if they have not yet moved.`;
      break;
    default:
      return `That's not a valid chess piece`;
  }
}

console.log(`${chessPiece} movement: ${chessPieceMovement(chessPiece)}`);

function gradeNumberToLetter(grade) {
  return grade > 100 || grade < 0
    ? 'Erro: valor da nota invalido'
    : grade >= 90
    ? 'A'
    : grade >= 80
    ? 'B'
    : grade >= 70
    ? 'C'
    : grade >= 60
    ? 'D'
    : grade >= 50
    ? 'E'
    : 'F';
}

console.log(`Nota: ${gradeNumberToLetter(grade)}`);

function hasEven(firstNumber, secondNumber, thirdNumber) {
  return firstNumber % 2 === 0 ||
    secondNumber % 2 === 0 ||
    thirdNumber % 2 === 0
    ? true
    : false;
}

console.log(`Has even: ${hasEven(...triangle)}`);

function hasOdd(firstNumber, secondNumber, thirdNumber) {
  return firstNumber % 2 !== 0 ||
    secondNumber % 2 !== 0 ||
    thirdNumber % 2 !== 0
    ? true
    : false;
}

console.log(`Has odd: ${hasOdd(...triangle)}`);

function getProfit(costPrice, sellingPrice) {
  totalCost = costPrice * 1.2;

  return (sellingPrice - totalCost) * 1000;
}

console.log(`Profit: ${getProfit(costPrice, sellingPrice)}`);

function getLiquidSalary(salary) {
  let inss;
  let baseSalary;
  let ir;

  inss =
    salary <= 1556.94
      ? salary * 0.08
      : salary <= 2594.92
      ? salary * 0.09
      : salary <= 5189.82
      ? salary * 0.11
      : 570.88;

  baseSalary = salary - inss;

  ir =
    baseSalary <= 1903.98
      ? 0
      : baseSalary <= 2826.65
      ? baseSalary * 0.075 - 142.8
      : baseSalary <= 3751.05
      ? baseSalary * 0.15 - 354.8
      : baseSalary <= 4664.68
      ? baseSalary * 0.225 - 636.13
      : baseSalary * 0.275 - 869.36;

  return baseSalary - ir;
}

console.log(`Liquid salary: ${getLiquidSalary(salary)}`);
