/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base */

var number = 5;

if (number > 0) {
  for (let i = 1; i <= number; i += 1) {
    console.log('*'.repeat(i));
  }
} else
  console.log('Invalid number!');
