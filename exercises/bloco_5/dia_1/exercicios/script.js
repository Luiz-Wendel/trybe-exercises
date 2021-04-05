/*
  Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
  - document.getElementById()
  - document.getElementsByClassName()
  - document.getElementsByTagName()

  1. Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
     (Não gaste tempo pensando no texto e sim realizando o exercício)
  2. Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
  3. Crie uma função que mude a cor do quadrado vermelho para branco.
  4. Crie uma função que corrija o texto da tag <h1>.
  5. Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
  6. Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

document.querySelector('.center-content p:nth-child(2)').innerText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

document.getElementsByClassName('main-content')[0].style.backgroundColor =
  'rgb(76,164,109)';

document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white';
