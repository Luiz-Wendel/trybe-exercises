/* 
  Faça um programa que, dado um valor definido numa variável,
  retorne "positive" se esse valor for positivo,
  "negative" se for negativo e "zero" caso contrário.
*/

var num = -4;

num > 0
  ? console.log("positive")
  : num === 0
  ? console.log("zero")
  : console.log("negative");
