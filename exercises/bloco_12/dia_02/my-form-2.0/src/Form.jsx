import React from 'react';
import axios from 'axios';

class Form extends React.Component {
  constructor() {
    super()

    this.state={
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      tipo: '',
      resumo: '',
      cargo: '',
      descricao: '',
      estados: [],
      count: 0,
    }

    this.handleChange = this.handleChange.bind(this);
    this.setStates = this.setStates.bind(this);
    this.clearIfStartsWithNumber = this.clearIfStartsWithNumber.bind(this);
    this.displayAlert = this.displayAlert.bind(this);
    this.createCV = this.createCV.bind(this);
  }

  handleChange({ target }) {
    let { name, value } = target;

    if (name === "nome") value = value.toUpperCase();
    if (name === "endereco") value = value.replace(/[^\da-zA-Z]/g, '');

    this.setState({
      [name]: value,
    });
  }

  clearIfStartsWithNumber({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value.match(/^[\d]/g) ? '' : value,
    });
  }

  displayAlert() {
    const { count } = this.state;

    if (count === 0) {
      alert('Preencha com cuidado esta informação.');
  
      this.setState({
        count: 1,
      });
    }
  }

  async setStates() {
    const data = await this.fetchStates();

    const states = data.data.map(({sigla, nome}) => ({sigla, nome}))

    this.setState({
      estados: states,
    })
  }

  fetchStates() {
    return axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => response)
      .then((data) => data);
  }

  createCV() {
    const { estados, count, ...data} = this.state;

    const form = document.querySelector('form');

    const div = document.createElement('div');
    div.id = 'cvDiv';

    Object.entries(data).forEach(([key, value]) => {
      const newDiv = document.createElement('p');
      newDiv.innerText = `${key}: ${value}`;
      div.appendChild(newDiv);
    })

    form.appendChild(div);
  }

  componentDidMount() {
    this.setStates();
  }

  render() {
    const {
      nome,
      email,
      cpf,
      endereco,
      cidade,
      estado,
      estados,
      resumo,
      cargo,
      descricao
    } = this.state;

    return (
      <form>
        <fieldset>
          <label>
            Nome:
            <input
              name="nome"
              type="text"
              maxLength="40"
              value={ nome }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            Email:
            <input
              name="email"
              type="text"
              maxLength="50"
              value={ email }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            CPF:
            <input
              name="cpf"
              type="text"
              maxLength="11"
              value={ cpf }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            Endereço:
            <input
              name="endereco"
              type="text"
              maxLength="200"
              value={ endereco }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            Cidade:
            <input
              name="cidade"
              type="text"
              maxLength="28"
              value={ cidade }
              onChange={ this.handleChange }
              onBlur={ this.clearIfStartsWithNumber }
              required
            />
          </label>
          <label>
            Estado:
            <select name="estado" value={ estado } onChange={ this.handleChange } required>
              <option value="">Selecione...</option>
              {
                estados.map(({ sigla, nome }) => (
                  <option key={ sigla } value={ nome }>{ nome }</option>
                ))
              }
            </select>
          </label>
          <label>Tipo:</label>
          <label>
            Casa
            <input
              name="tipo"
              type="radio"
              maxLength="40"
              value="casa"
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            Apartamento
            <input
              name="tipo"
              type="radio"
              maxLength="40"
              value="apartamento"
              onChange={ this.handleChange }
              required
            />
          </label>
        </fieldset>
        <fieldset>
          <label>
            Resumo do currículo:
            <textarea
              name="resumo"
              cols="30"
              rows="10"
              maxLength="1000"
              value={ resumo }
              onChange={ this.handleChange }
              required
            />
          </label>
          <label>
            Cargo:
            <textarea
              name="cargo"
              cols="30"
              rows="10"
              maxLength="40"
              value={ cargo }
              onChange={ this.handleChange }
              onMouseEnter={ this.displayAlert } 
              required
            />
          </label>
          <label>
            Descrição do cargo:
            <input
              name="descricao"
              type="text"
              maxLength="500"
              value={ descricao }
              onChange={ this.handleChange }
              required
            />
          </label>
        </fieldset>
        <button type="button" onClick={ this.createCV }>Enviar</button>
      </form>
    );
  }
}

export default Form;
