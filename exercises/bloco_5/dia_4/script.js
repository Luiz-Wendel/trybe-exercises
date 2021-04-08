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
    let inputValue = target.previousElementSibling.value;

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
        alert(target.previousElementSibling.value)
        break;
      case 'lineHeightBtn':
        alert(target.previousElementSibling.value)
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
