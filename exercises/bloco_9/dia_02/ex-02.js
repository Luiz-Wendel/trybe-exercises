/*
  Primeiramente, instancie uma Promise

  Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.

  Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
  Caso contrário, ela deve ser rejeitada.
  Acresça um then , com um console.log('Promise resolvida')
  e um catch , com um console.log('Promise rejeitada') à Promise ,
  só para que o código funcione e possamos ver o resultado.

  Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
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
