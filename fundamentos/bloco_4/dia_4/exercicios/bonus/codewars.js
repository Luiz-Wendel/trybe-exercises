/*
  Desafio - 16 + 8 = 214
  Source: codewars.com/kata/5effa412233ac3002a9e471d/train/javascript
*/

function numberToReversedArray(number) {
  return number
    .toString()
    .split('')
    .reverse()
    .map((string) => parseInt(string, 10));
}

function crazySum(biggestArray, shortestArray) {
  let result = [];

  for (let index = 0; index < biggestArray.length; index += 1) {
    if (index < shortestArray.length)
      result.push(biggestArray[index] + shortestArray[index]);
    else result.push(biggestArray[index]);
  }

  return result;
}

function add(num1, num2) {
  let firstArray = numberToReversedArray(num1);
  let secondArray = numberToReversedArray(num2);

  if (firstArray.length < secondArray.length)
    [firstArray, secondArray] = [secondArray, firstArray];

  return parseInt(crazySum(firstArray, secondArray).reverse().join(''));
}
