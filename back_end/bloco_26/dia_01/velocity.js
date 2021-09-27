const readlineSync = require('readline-sync');

const userDistance = readlineSync.question('What\'s the distance?');
const userSpeed = readlineSync.question('What\'s the speed?');

const velocity = (distance, speed) => {
  console.log(distance / speed);
};

velocity(userDistance, userSpeed);
