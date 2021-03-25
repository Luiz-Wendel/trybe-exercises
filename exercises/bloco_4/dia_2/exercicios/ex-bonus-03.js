let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let number2 = [];

for (let i = 0; i < numbers.length; i += 1) {
  if (i !== numbers.length - 1) number2.push(numbers[i] * numbers[i + 1]);
  else number2.push(numbers[i] * 2);
}

console.log(number2);
