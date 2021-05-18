const myRemoveWithoutCopy = require('./ex-03.js');

describe('Testing myRemoveWithoutCopy function', () => {
  it('should be a function', () => {
    expect(typeof myRemoveWithoutCopy).toBe('function');
  });

  it('should return [1, 2, 4] if [1, 2, 3, 4] and 3 are passed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should not return [1, 2, 3, 4] if [1, 2, 3, 4] and 3 are passed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should change original array', () => {
    const array = [1, 2, 3, 4];
    myRemoveWithoutCopy(array, 4);
    expect(array).toEqual([1, 2, 3]);
  });

  it('should return [1, 2, 3, 4] if [1, 2, 3, 4] and 5 are passed', () => {
    expect(myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
