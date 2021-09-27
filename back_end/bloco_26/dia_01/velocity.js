var readlineSync = require('readline-sync');

var userDistance = readlineSync.question('What\'s the distance?');
var userSpeed = readlineSync.question('What\'s the speed?');

const velocity = (distance, speed) => {
  console.log(distance / speed);
};

velocity(userDistance, userSpeed);
