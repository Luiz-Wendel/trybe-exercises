/*
  Exercicios - Parte I
  1. Acesse o elemento elementoOndeVoceEsta .
  2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
  3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
     Você se lembra dos vídeos da aula anterior, como fazer isso?
  4. Acesse o primeiroFilho a partir de pai .
  5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
  6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
  7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
  8. Agora acesse o terceiroFilho a partir de pai .
*/

const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');

const elementoPai = elementoOndeVoceEsta.parentElement;

elementoPai.style.color = 'green';

elementoOndeVoceEsta.firstElementChild.innerText = 'Teste';

const primeiroFilho = elementoOndeVoceEsta.previousElementSibling;

const textoAtencao = elementoOndeVoceEsta.nextSibling;

const terceiroFilho = elementoOndeVoceEsta.nextElementSibling;

const terceiroFilhoDoPai = elementoPai.lastElementChild.previousElementSibling;

/*
  Exercicios - Parte II
  1. Crie um irmão para elementoOndeVoceEsta.
  2. Crie um filho para elementoOndeVoceEsta.
  3. Crie um filho para primeiroFilhoDoFilho.
  4. A partir desse filho criado, acesse terceiroFilho.
*/

let novoElemento = document.createElement('div');
elementoPai.appendChild(novoElemento.cloneNode());

elementoOndeVoceEsta.appendChild(novoElemento.cloneNode());

primeiroFilho.appendChild(novoElemento.cloneNode());

let filhoDoPrimeiroFilho = primeiroFilho.firstElementChild;
let terceiroFilhoDoFilhoDoPrimeiroFilho = filhoDoPrimeiroFilho.parentElement.nextElementSibling.nextElementSibling;
