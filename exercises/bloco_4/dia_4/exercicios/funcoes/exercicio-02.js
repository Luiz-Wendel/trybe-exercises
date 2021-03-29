/*
  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

  Array de teste: [2, 3, 6, 7, 10, 1]; .
  Valor esperado no retorno da função: 4 .
*/

var array = [2, 3, 6, 7, 10, 1];

function getBiggestNumberIndex(array) {
  var biggestNumber = array[0];

  for (number of array) {
    number > biggestNumber ? (biggestNumber = number) : '';
  }

  return array.indexOf(biggestNumber);
}

console.log(getBiggestNumberIndex(array));
