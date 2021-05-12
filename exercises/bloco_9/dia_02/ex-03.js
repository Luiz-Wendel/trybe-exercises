/*
  Quando a promise for resolvida com sucesso, retorne um array com 4 itens,
  sendo eles o resultado da divisão do numero resultante por 2, 3, 5 e 10.
*/

const promise = new Promise((resolve, reject) => {
  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.round(Math.random() * 50) ** 2);
  }

  const sum = array.reduce((acc, number) => acc + number);

  if (sum < 8000) {
    return resolve('Promise resolved');
  }
  reject('Promise rejected');
})
.then((response) => console.log(response))
.catch((error) => console.log(error));
