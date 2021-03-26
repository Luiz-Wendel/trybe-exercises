/*
  Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1,
  imprima na tela um quadrado feito de asteriscos de lado de tamanho n
*/

var number = 2;

if (number > 0) {
  for (let i = 0; i < number; i += 1) {
    console.log('*'.repeat(number));
  }
} else
  console.log('Invalid number!');
