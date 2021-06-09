/* 
  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

  Exemplo de palíndromo: arara .
  verificaPalindrome('arara') ;
  Retorno esperado: true
  verificaPalindrome('desenvolvimento') ;
  Retorno esperado: false
*/

var word = 'arara';

function isPalindrome(word) {
  let wordReversed = word.split('').reverse().join('');

  return word === wordReversed ? true : false;
}

console.log(isPalindrome(word));
