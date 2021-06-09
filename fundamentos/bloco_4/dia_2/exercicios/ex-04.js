/*
  Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20".
  Caso não seja, imprima a mensagem: "valor menor ou igual a 20"
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

var sum = 0;
var arithmeticAverage = 0;

for (let number of numbers) sum += number;

arithmeticAverage = sum / numbers.length;

arithmeticAverage > 20 ? console.log('Valor maior que 20') : console.log('valor menor ou igual a 20');
