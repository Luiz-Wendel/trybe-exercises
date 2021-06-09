/*
  Utilize somente Higher Order Functions para fazer as operações com o array;

  Refatore a Promise para utilizar somente async e await .
*/

const getSum = () => {
  const array = [];

  for (let index = 0; index < 10; index += 1) {
    array.push(Math.round(Math.random() * 50) ** 2);
  }

  const sum = array.reduce((acc, number) => acc + number);

  if (sum < 8000) return sum
  else throw new Error();
};

const getDivisions = (sum) => [2, 3, 5, 10].map((factor) => sum / factor);;

const getDivisionsSum = (array) => array.reduce((acc, number) => acc + number);

const promise = async () => {
  try {
    const sum = getSum();
    console.log(`Sum: ${sum}`);
    const divisions = getDivisions(sum);
    console.log(`Divisions: ${divisions}`);
    const divisionsSum = getDivisionsSum(divisions);
    console.log(`Divisions sum: ${divisionsSum}`);
  } catch {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!')
  }
};

promise();
