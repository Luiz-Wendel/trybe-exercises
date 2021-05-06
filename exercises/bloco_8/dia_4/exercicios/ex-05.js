const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => names.reduce((acc, name) => {
  const result = name.toLowerCase().split('a').length;
  return result > 1 ? acc + result - 1 : acc;
}, 0);

assert.deepStrictEqual(containsA(), 20);
