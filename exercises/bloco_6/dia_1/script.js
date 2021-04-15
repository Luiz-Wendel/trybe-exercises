const ibgeURL = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados';

const selectState = document.getElementById('state');

const optionElement = document.createElement('option');

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

function onLoad() {
  setStates();
}

window.onload = onLoad;
