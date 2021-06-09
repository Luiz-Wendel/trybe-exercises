/*
  Faça um programa que retorne o maior de três números.
  Defina no começo do programa três variáveis com os valores que serão comparados.
*/

var num1 = 2;
var num2 = 3;
var num3 = 4;

num1 > num2
  ? num1 > num3
    ? console.log(num1)
    : console.log(num3)
  : num2 > num3
  ? console.log(num2)
  : console.log(num3);
