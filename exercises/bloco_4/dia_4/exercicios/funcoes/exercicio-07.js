/*
  Crie uma função que receba uma string word e outra string ending .
  Verifique se a string ending é o final da string word .
  Considere que a string ending sempre será menor que a string word .

  Valor de teste: 'trybe' e 'be'
  Valor esperado no retorno da função: true
  verificaFimPalavra('trybe', 'be') ;
  Retorno esperado: true
  verificaFimPalavra('joaofernando', 'fernan') ;
  Retorno esperado: false
*/

var word = 'joaofernando';
var ending = 'fernan';

function isStringEnding(word, ending) {
  var temp = word.slice(word.length - ending.length, word.length)

  return temp === ending ? true : false
}

console.log(isStringEnding(word, ending))