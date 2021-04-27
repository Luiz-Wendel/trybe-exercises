const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ascendingOrder = (array) => array.sort((firstNumber, secondNumber) => firstNumber - secondNumber);

console.log(`Os números ${ascendingOrder(oddsAndEvens)} se encontram ordenados de forma crescente!`);
