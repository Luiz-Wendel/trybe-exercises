const newEmployee = (nome) => ({
  nomeCompleto: nome,
  email: `${nome.toLowerCase().split(' ').join('_')}@trybe.com`,
});

const newEmployees = () => {
  const employees = {
    id1: newEmployee('Pedro Guerra'),// Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro
    id2: newEmployee('Luiza Drumond'),// Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro
    id3: newEmployee('Carla Paiva'),// Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro
  }
  return employees;
};

console.log(newEmployees());