const ibgeURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';
let isFormValid = true;

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

function resetForm() {
  divData.innerHTML = '';
}

function validateForm() {
  JustValidate('#curriculum-form', {
    rules: {
      'full-name': {
        required: true,
        maxLength: 40,
      },
      email: {
        required: true,
        maxLength: 50,
      },
      cpf: {
        required: true,
        maxLength: 11,
      },
      address: {
        required: true,
        maxLength: 200,
      },
      city: {
        required: true,
        maxLength: 28,
      },
      required: {
        required: true,
      },
      summary: {
        required: true,
        maxLength: 1000,
      },
      role: {
        required: true,
        maxLength: 40,
      },
      'role-description': {
        required: true,
        maxLength: 500,
      },
    },
    invalidFormCallback: (formErrors) => {
      isFormValid = false;
    }
  });
}

function formSubmit(event) {
  event.preventDefault();

  isFormValid = true;
  validateForm();

  if (isFormValid) {
    resetForm();

    const newTable = tableElement.cloneNode();
    divData.appendChild(newTable);

    const formData = new FormData(form);
    for (const data of formData.entries()) createRow(newTable, data);
  }
}

function onLoad() {
  setStates();
  form.addEventListener('submit', formSubmit);
  buttonReset.addEventListener('click', resetForm);
}

window.onload = onLoad;
