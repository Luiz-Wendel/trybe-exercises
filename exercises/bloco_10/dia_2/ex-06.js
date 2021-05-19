const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const foundAnimal = Animals.find((animal) => animal.name === name);
  
    return foundAnimal ? resolve(foundAnimal) : reject('Nenhum animal com esse nome!');
  });
};

const getAnimal = (name) => {
  return findAnimalByName(name);
};

module.exports = getAnimal;
