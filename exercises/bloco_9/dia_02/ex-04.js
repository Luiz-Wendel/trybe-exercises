/*
  Quando a Promise for rejeitada, imprima, via console.log ,
  a frase "É mais de oito mil! Essa promise deve estar quebrada!"
*/

const promise = new Promise((resolve, reject) => {
  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.round(Math.random() * 50) ** 2);
  }

  const sum = array.reduce((acc, number) => acc + number);

  if (sum < 8000) {
    return resolve(sum);
  }
  reject('Promise rejected');
})
.then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])
.catch((error) => console.log(error));
