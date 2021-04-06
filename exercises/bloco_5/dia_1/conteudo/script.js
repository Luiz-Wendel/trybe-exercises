document.getElementsByTagName('header')[0].style.backgroundColor = 'green';

document.querySelectorAll('.emergency-tasks div').forEach((element) => element.style.backgroundColor = '#ff9f84');
document.querySelectorAll('.emergency-tasks h3').forEach((element) => {
  element.style.backgroundColor = '#a501f3';
  element.style.margin = 0;
});

document.querySelectorAll('.no-emergency-tasks div').forEach((element) => element.style.backgroundColor = '#f9db5f');
document.querySelectorAll('.no-emergency-tasks h3').forEach((element) => {
  element.style.backgroundColor = 'black'
  element.style.margin = 0;
});

let footer = document.getElementById('footer-container');
footer.style.backgroundColor = '#003533';
footer.style.width = '100%';
footer.style.position = 'absolute';
footer.style.bottom = 0;
footer.style.boxSizing = 'border-box';