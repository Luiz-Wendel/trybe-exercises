/*
  Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

  Valor de teste: N = 5 .
  Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

var n = 5;

function factorial(number) {
  var result = 0;

  for (let i = 1; i <= number; i += 1) {
    result += i;
  }

  return result;
}

console.log(factorial(n));
