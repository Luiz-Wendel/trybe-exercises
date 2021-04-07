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
