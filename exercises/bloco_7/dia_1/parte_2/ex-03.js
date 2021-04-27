let clickCount = 0;

const spanCounter = document.getElementById('counter');
const buttonAdd = document.querySelector('button');

function addClickCount() {
  clickCount += 1;
  spanCounter.innerText = clickCount;
}

const onLoad = () => {
  buttonAdd.addEventListener('click', addClickCount);
}

window.onload = onLoad;
