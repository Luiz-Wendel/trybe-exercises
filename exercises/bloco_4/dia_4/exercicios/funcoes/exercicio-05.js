/*
  Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

  Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
  Valor esperado no retorno da função: 2 .
*/

var array = [2, 3, 2, 5, 8, 2, 3];

function getMostRepeated(array) {
  var temp = [];
  var biggest = 0;

  for (number of array) {
    temp[number] === undefined ? (temp[number] = 1) : (temp[number] += 1);
  }

  for (number of temp) {
    if (number > biggest) biggest = number;
  }

  return temp.indexOf(biggest);
}

console.log(getMostRepeated(array));
