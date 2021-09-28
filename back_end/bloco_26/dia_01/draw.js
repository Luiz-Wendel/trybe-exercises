const readlineSync = require('readline-sync');

let playAgain = true;

// SRC: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min) + min);
};

const draw = (userGuess) => {
  const randomInt = getRandomInt(0, 10);

  console.log(
    userGuess === randomInt
    ? 'Parabéns, número correto!'
    : `Opa, não foi dessa vez. O número era ${randomInt}`
  );
};

do {
  const userGuess = readlineSync.questionInt('What\'s your guess? ');
  draw(userGuess);
  playOptions = ['YES', 'NO'];
  userPlayAgain = readlineSync.keyInSelect(playOptions, 'Play again?');
  playAgain = playOptions[userPlayAgain] === 'YES' ? true : false;
} while (playAgain);
