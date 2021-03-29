/*
  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

  Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
  Valor esperado no retorno da função: 6 .
*/

var array = [2, 4, 6, 7, 10, 0, -3];

function getSmallestNumberIndex(array) {
  var smallestNumber = array[0];

  for (number of array) {
    number < smallestNumber ? (smallestNumber = number) : '';
  }

  return array.indexOf(smallestNumber);
}

console.log(getSmallestNumberIndex(array));
