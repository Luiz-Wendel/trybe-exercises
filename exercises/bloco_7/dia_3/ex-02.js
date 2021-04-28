const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

/*
  1. Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  2. Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
  3. Verifique se o array passado por parâmetro não sofreu alterações
  4. Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
*/
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4], 'The function should remove the correct value!');
assert.notDeepStrictEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4], 'The function should remove the correct value!');
let testArray = [1, 2, 3, 4];
myRemove(testArray, 3)
assert.deepStrictEqual(testArray, [1, 2, 3, 4], 'The function should not change the original array!');
assert.deepStrictEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4], 'The function should return the original array!');
