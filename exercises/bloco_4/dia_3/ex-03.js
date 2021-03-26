/* Agora inverta o lado do triângulo */

var number = 5;

if (number > 0) {
  for (let i = 1; i <= number; i += 1) {
    console.log(' '.repeat(number - i) + '*'.repeat(i));
  }
} else
  console.log('Invalid number!');
