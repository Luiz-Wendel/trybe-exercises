const readlineSync = require('readline-sync');
var exec = require('child_process').exec;

const scriptOptions = ['imc', 'velocity', 'draw', 'factorial'];
const userPick = readlineSync.keyInSelect(scriptOptions, 'Which script?');

if (userPick >= 0) {
  const selectedScript = scriptOptions[userPick];

  exec(`npm run ${selectedScript}`, (error, stdout) => {
    if (error) console.log('Something went wrong!', error);

    console.log(stdout);
  });
} else console.log('No script selected');
