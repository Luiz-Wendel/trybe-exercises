const body = document.getElementsByTagName('body')[0];
const header = document.getElementById('header');
const bgInput = document.getElementById('bgInput');
const txtColorInput = document.getElementById('txtColorInput');
const fontSizeInput = document.getElementById('fontSizeInput');
const lineHeightInput = document.getElementById('lineHeightInput');
const fontFamilyInput = document.getElementById('fontFamilyInput');
const bgBtn = document.getElementById('bgBtn');
const txtColorBtn = document.getElementById('txtColorBtn');
const fontSizeBtn = document.getElementById('fontSizeBtn');
const lineHeightBtn = document.getElementById('lineHeightBtn');
const fontFamilyBtn = document.getElementById('fontFamilyBtn');

function setStyleSingleElement(element, property, value, localStorageKey) {
  element.style[property] = value;
  localStorage.setItem(localStorageKey, value);
}

header.addEventListener('click', function({target}) {
  if (target.id.includes('Btn')) {
    const inputValue = target.previousElementSibling.value;
    const paragraphs = document.getElementsByTagName('p');

    switch (target.id) {
      case 'bgBtn':
        setStyleSingleElement(body, 'backgroundColor', inputValue, 'bg');
        break;
      case 'txtColorBtn':
        setStyleSingleElement(body, 'color', inputValue, 'txtColor');
        break;
      case 'fontSizeBtn':
        for (let paragraph of paragraphs) paragraph.style.fontSize = `${inputValue}px`;
        localStorage.setItem('fontSize', `${inputValue}px`);
        break;
      case 'lineHeightBtn':
        for (let paragraph of paragraphs) paragraph.style.lineHeight = inputValue;
        localStorage.setItem('lineHeight', inputValue);
        break;
      case 'fontFamilyBtn':
        for (let paragraph of paragraphs) paragraph.style.fontFamily = inputValue;
        localStorage.setItem('fontFamily', inputValue);
        break;
      default:
        alert('Something went wrong!')
        break;
    }
  }
});
