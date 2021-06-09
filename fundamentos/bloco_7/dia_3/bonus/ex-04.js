const assert = require('assert');

const getLargestNumber = (array) => array.sort((a, b) => a - b)[array.length - 1];

const parameter = [45, 8, 2, 50, 1, 7, 99];
const result = 99;

assert.deepStrictEqual(getLargestNumber(parameter), result);
