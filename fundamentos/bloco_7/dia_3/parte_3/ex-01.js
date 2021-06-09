const assert = require('assert');

const greetPeople = (people) => people.map((person) => `Hello ${person}`);

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.deepStrictEqual(greetPeople(parameter), result);
