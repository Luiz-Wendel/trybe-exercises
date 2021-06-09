let baseURL = 'https://fonts.googleapis.com/css2?family=FONTNAME&display=swap';

const googleFontLink = document.getElementById('googleFontLink');
const body = document.getElementsByTagName('body')[0];
const header = document.getElementById('header');
const paragraphs = document.getElementsByTagName('p');
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

function setGoogleFontLink(fontName) {
  return googleFontLink.setAttribute('href', baseURL.replace('FONTNAME', fontName.trim().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('+')));
}

function setStyleSingleElement(element, property, value, localStorageKey) {
  element.style[property] = value;
  localStorage.setItem(localStorageKey, value);
}

function setStyleMultipleElements(elements, property, value, localStorageKey) {
  for (let element of elements) element.style[property] = value;
  localStorage.setItem(localStorageKey, value);
}

header.addEventListener('click', function ({ target }) {
  if (target.id.includes('Btn')) {
    const inputValue = target.previousElementSibling.value;

    switch (target.id) {
      case 'bgBtn':
        setStyleSingleElement(body, 'backgroundColor', inputValue, 'bg');
        break;
      case 'txtColorBtn':
        setStyleSingleElement(body, 'color', inputValue, 'txtColor');
        break;
      case 'fontSizeBtn':
        setStyleMultipleElements(
          paragraphs,
          'fontSize',
          `${inputValue}px`,
          'fontSize'
        );
        break;
      case 'lineHeightBtn':
        setStyleMultipleElements(
          paragraphs,
          'lineHeight',
          inputValue,
          'lineHeight'
        );
        break;
      case 'fontFamilyBtn':
        setStyleMultipleElements(
          paragraphs,
          'fontFamily',
          inputValue,
          'fontFamily'
        );
        setGoogleFontLink(inputValue);
        break;
      default:
        alert('Something went wrong!');
        break;
    }
  }
});

function setLocalStyleSingleElement(element, property, value) {
  element.style[property] = value;
}

function setLocalStyleMultipleElements(elements, property, value) {
  for (let element of elements) element.style[property] = value;
}

window.onload = () => {
  const keys = Object.keys(localStorage);

  for (const property of keys) {
    const propertyValue = localStorage.getItem(property);

    switch (property) {
      case 'bg':
        setLocalStyleSingleElement(body, 'backgroundColor', propertyValue);
        break;
      case 'txtColor':
        setLocalStyleSingleElement(body, 'color', propertyValue);
        break;
      case 'fontSize':
        setLocalStyleMultipleElements(paragraphs, 'fontSize', propertyValue);
        fontSizeInput.value = parseInt(propertyValue);
        break;
      case 'lineHeight':
        setLocalStyleMultipleElements(paragraphs, 'lineHeight', propertyValue);
        lineHeightInput.value = propertyValue;
        break;
      case 'fontFamily':
        setLocalStyleMultipleElements(paragraphs, 'fontFamily', propertyValue);
        setGoogleFontLink(propertyValue);
        break;
      default:
        break;
    }
  }
};
