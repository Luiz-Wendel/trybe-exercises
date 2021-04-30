const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

/*
  Compare dois objetos (JSON) para verificar se são idênticos ou não
*/
assert.deepStrictEqual(obj1, obj2);
assert.deepStrictEqual(obj3, obj1);
