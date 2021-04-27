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

const getObjectLength = (object) => Object.getOwnPropertyNames(object).length;

const getValues = (object) => Object.values(object);

const allLessons = {
  lesson1: Object.assign(lesson1),
  lesson2: Object.assign(lesson2),
  lesson3: Object.assign(lesson3),
};

const getTotalStudentsNumber = (object) => Object.keys(object).reduce((total, lesson) => total + object[lesson].numeroEstudantes, 0);

const getValueByNumber = (object, position) => Object.values(object)[position];

const verifyPair = (object, key, value) => Object.keys(object).includes(key) && object[key] === value;

const getStudentsBySubject = (object, subject) => Object.keys(object).reduce((total, lesson) => (
  object[lesson].materia === subject ? total + object[lesson].numeroEstudantes : total + 0
), 0);

console.log(getStudentsBySubject(allLessons, 'Matemática'));
