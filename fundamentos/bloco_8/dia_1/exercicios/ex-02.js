/*
  Desenvolva uma HOF que retorna o resultado de um sorteio.
  Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros
  o número apostado e uma função que checa se o número apostado é igual ao número sorteado.
  O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").
*/

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const draw = () => getRandomInt(1, 5);

const drawResult = (bet, generateDraw) => bet === generateDraw() ? 'Parabéns você ganhou' : 'Tente novamente';

console.log(drawResult(2, draw));
