const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

/*
  1. Teste se o retorno de sum(4, 5) é 9
  2. Teste se o retorno de sum(0, 0) é 0
  3. Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
  4. Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
*/
assert.strictEqual(sum(4, 5), 9, 'Sum of 4 and 5 must be 9!');
assert.strictEqual(sum(0, 0), 0, 'Sum of 0 and 0 must be 0!');
// sum(4, '5');
assert.throws(() => { sum(4, '5') }, /^Error: parameters must be numbers$/, 'Sum of number and strings must throw an Error!');
