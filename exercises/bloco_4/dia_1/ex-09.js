/*
  Escreva um programa que defina três números em variáveis no seu começo e
    retorne true se pelo menos uma das três for ímpar.
    Caso contrário, ele retorna false.
  Bonus: use somente um if.
*/

var num1 = 1214;
var num2 = 212;
var num3 = 122123;

num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0
  ? console.log(true)
  : console.log(false);
