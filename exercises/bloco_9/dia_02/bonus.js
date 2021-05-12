/*
  Utilize somente Higher Order Functions para fazer as operações com o array;

  Refatore a Promise para utilizar somente async e await .
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
  reject();
})
.then((sum) => [sum / 2, sum / 3, sum / 5, sum / 10])
.then((divisions) => divisions.reduce((acc, number) => acc + number))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
