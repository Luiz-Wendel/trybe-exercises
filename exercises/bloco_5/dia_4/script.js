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

header.addEventListener('click', function({target}) {
  if (target.id.includes('Btn')) {
    const inputValue = target.previousElementSibling.value;
    const paragraphs = document.getElementsByTagName('p');

    switch (target.id) {
      case 'bgBtn':
        body.style.backgroundColor = inputValue;
        localStorage.setItem('bg', inputValue);
        break;
      case 'txtColorBtn':
        body.style.color = inputValue;
        localStorage.setItem('txtColor', inputValue);
        break;
      case 'fontSizeBtn':
        for (let paragraph of paragraphs) paragraph.style.fontSize = `${inputValue}px`;
        localStorage.setItem('fontSize', `${inputValue}px`)
        break;
      case 'lineHeightBtn':
        for (let paragraph of paragraphs) paragraph.style.lineHeight = inputValue;
        localStorage.setItem('lineHeight', inputValue);
        break;
      case 'fontFamilyBtn':
        alert(target.previousElementSibling.value)
        break;
      default:
        alert('Something went wrong!')
        break;
    }
  }
});
