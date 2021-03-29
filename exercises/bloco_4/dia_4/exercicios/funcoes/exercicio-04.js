/*
  Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

  Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
  Valor esperado no retorno da função: Fernanda .
*/

var array = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function getBiggestName(array) {
  var biggestName = array[0];

  for (let firstName of array) {
    firstName.length > biggestName.length ? (biggestName = firstName) : '';
  }

  return biggestName;
}

console.log(getBiggestName(array));
