const body = document.getElementsByTagName('body')[0];
const h1 = document.createElement('h1');
h1.innerText = 'Exercício 5.2 - JavaScript DOM';
body.appendChild(h1);

const div = document.createElement('div');
const mainContent = div.cloneNode();
mainContent.className = 'main-content';
body.appendChild(mainContent);

const centerContent = div.cloneNode();
centerContent.className = 'center-content';
mainContent.appendChild(centerContent);

const p = document.createElement('p');
centerContent.appendChild(p);

const leftContent = div.cloneNode();
leftContent.className = 'left-content';
mainContent.appendChild(leftContent);
