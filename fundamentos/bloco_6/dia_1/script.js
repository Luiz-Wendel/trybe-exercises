const ibgeURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const form = document.getElementById('curriculum-form');
const selectState = document.getElementById('state');
const buttonReset = document.querySelector("button[type='reset']");
const divData = document.getElementById('data');

const optionElement = document.createElement('option');
const tableElement = document.createElement('table');
const trElement = document.createElement('tr');
const tdElement = document.createElement('td');

async function fetchStates() {
  const response = await fetch(ibgeURL);
  data = await response.json();

  const states = data.map((state) => {
    return {
      initial: state.sigla,
      name: state.nome,
    }
  });
  
  return states;
}

async function setStates() {
  const states = await fetchStates();

  selectState.innerHTML = '';

  const firstOption = optionElement.cloneNode();
  firstOption.disabled = 'disabled';
  firstOption.selected = 'selected';
  firstOption.innerText = '-';
  selectState.appendChild(firstOption);

  for (let index = 0; index < states.length; index += 1) {
    const newOption = optionElement.cloneNode();
    newOption.value = states[index].initial;
    newOption.innerText = states[index].name
    selectState.appendChild(newOption);
  }
}

function createRow(table, content) {
  const newRow = trElement.cloneNode();

  for (let index = 0; index < content.length; index += 1) {
    const newData = tdElement.cloneNode();
    newData.innerText = content[index];
    newRow.appendChild(newData);
  }

  table.appendChild(newRow);
}

function isValidDate(date) {
  let [day, month, year] = date.split('/');

  day = parseInt(day);
  month = parseInt(month);
  year = parseInt(year);

  return day > 0 && day <=31 && month > 0 && month <= 12 && year > 0;
}

function resetForm() {
  divData.innerHTML = '';
}

function formSubmit(event) {
  event.preventDefault();

  resetForm();

  const newTable = tableElement.cloneNode();
  divData.appendChild(newTable);

  const formData = new FormData(form);
  for (const data of formData.entries()) {
    createRow(newTable, data);
    if (data[0] === 'begin-date' && !isValidDate(data[1])) {
      resetForm();
      alert('Invalid date!');
    }
  }
}

function onLoad() {
  setStates();
  form.addEventListener('submit', formSubmit);
  buttonReset.addEventListener('click', resetForm);
}

window.onload = onLoad;
