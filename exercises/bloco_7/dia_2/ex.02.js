const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const setNewAttribute = (object, attribute, value) => object[attribute] = value;

setNewAttribute(lesson2, 'turno', 'manhã');

const getKeys = (object) => Object.keys(object);

console.log(getKeys(lesson2));
