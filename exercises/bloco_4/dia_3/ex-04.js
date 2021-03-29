/* Faça uma pirâmide com n asteriscos de base */

var number = 7;

if (number > 0 && number % 2 === 1) {
  for (let i = 1; i <= number; i += 2) {
    var spacesRequired = (number - i) / 2;

    console.log(' '.repeat(spacesRequired) + '*'.repeat(i));
  }
} else
  console.log('Invalid number!');
