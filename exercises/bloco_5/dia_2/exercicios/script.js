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

const rightContent = div.cloneNode();
rightContent.className = 'right-content';
mainContent.appendChild(rightContent);

const image = document.createElement('img');
image.setAttribute('src', 'https://picsum.photos/200');
image.className = 'small-image';
leftContent.appendChild(image);

const ul = document.createElement('ul');
for (let index = 1; index <= 10; index += 1) {
  const li = document.createElement('li');
  li.innerText = index;
  ul.appendChild(li);
}
rightContent.appendChild(ul);

for (let index = 0; index < 3; index += 1) {
  const h3 = document.createElement('h3');
  mainContent.appendChild(h3);
}

h1.classList.add('title');

const h3s = document.getElementsByTagName('h3');
for (let element of h3s) element.classList.add('description');
