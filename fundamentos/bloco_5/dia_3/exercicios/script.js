function createDaysOfTheWeek() {
  const weekDays = [
    'Domingo',
    'Segunda',
    'Terça',
    'Quarta',
    'Quinta',
    'Sexta',
    'Sábado',
  ];
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

const decDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const holidays = [24, 25, 31];
const fridays = [4, 11, 18, 25];

const liDay = document.createElement('li');
liDay.classList.add('day');

const ulDays = document.querySelector('#days');

for (const day of decDaysList) {
  const newLi = liDay.cloneNode();

  if (holidays.includes(day)) newLi.classList.add('holiday');
  if (fridays.includes(day)) newLi.classList.add('friday');

  newLi.innerText = day;

  ulDays.appendChild(newLi);
}

function createHolidaysButton(buttonName) {
  const holidayButton = document.createElement('button');
  holidayButton.innerText = buttonName;
  holidayButton.id = 'btn-holiday';
  document.querySelector('div.buttons-container').appendChild(holidayButton);
}

createHolidaysButton('Feriados');

function toggleHolidayBackgroundColor() {
  const holidayDays = document.querySelectorAll('.holiday');

  for (const holidayDay of holidayDays) {
    if (holidayDay.classList.contains('white-background'))
      holidayDay.classList.remove('white-background');
    else holidayDay.classList.add('white-background');
  }
}

const holidayButton = document.getElementById('btn-holiday');
holidayButton.addEventListener('click', toggleHolidayBackgroundColor);

function createFridayButton(buttonName) {
  const fridayButton = document.createElement('button');
  fridayButton.innerText = buttonName;
  fridayButton.id = 'btn-friday';
  document.querySelector('div.buttons-container').appendChild(fridayButton);
}

createFridayButton('Sexta-feira');

function toggleFridayText() {
  const fridayDays = document.querySelectorAll('.friday');

  for (const fridayDay of fridayDays) {
    if (fridayDay.innerText === 'Sextou!') {
      fridayDay.innerText = parseInt(fridayDay.previousElementSibling.innerText) + 1;
    } else fridayDay.innerText = 'Sextou!'
  }
}

const fridayButton = document.getElementById('btn-friday');
fridayButton.addEventListener('click', toggleFridayText);

ulDays.addEventListener('mouseover', function({target}) {
  if (target.classList.contains('day')) {
    target.classList.add('zoom');
  }
});

ulDays.addEventListener('mouseout', function({target}) {
  if (target.classList.contains('day')) {
    target.classList.remove('zoom');
  }
});

const myTasks = document.querySelector('div.my-tasks');

function createTaskSpan(task) {
  const taskSpan = document.createElement('span');
  taskSpan.innerText = task;
  myTasks.appendChild(taskSpan);
}

createTaskSpan('cozinhar');

function createTaskDiv(color) {
  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');
  taskDiv.style.backgroundColor = color;
  myTasks.appendChild(taskDiv);
}

createTaskDiv('green');

function toggleSelectedClass({target}) {
  if (target.classList.contains('task')) {
    if (target.classList.contains('selected')) target.classList.remove('selected');
    else target.classList.add('selected');
  }
}

myTasks.addEventListener('click', toggleSelectedClass);

function setTaskColor({target}) {
  if (target.classList.contains('day')) {
    const color = document.querySelector('div.selected').style.backgroundColor;
    target.style.color = color;
  }
}

ulDays.addEventListener('click', setTaskColor);

const buttonAdd = document.getElementById('btn-add');
const input = document.getElementById('task-input');
const taskList = document.querySelector('ul.task-list');

function addTask() {
  if (input.value) {
    const newTask = document.createElement('li');
    newTask.innerText = input.value;
    taskList.appendChild(newTask);
  } else alert('Nenhum compromisso definido!');
}

buttonAdd.addEventListener('click', addTask)

input.addEventListener('keypress', function({key}) {
  if (key === 'Enter') {
    addTask();
  }
});
