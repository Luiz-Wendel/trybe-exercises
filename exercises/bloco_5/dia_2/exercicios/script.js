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
