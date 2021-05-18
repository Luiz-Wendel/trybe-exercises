const myRemove = require('./ex-02.js');

describe('Testing myRemove function', () => {
  it('should be a function', () => {
    expect(typeof myRemove).toBe('function');
  });

  it('should return [1, 2, 4] if [1, 2, 3, 4] and 3 are passed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('should not return [1, 2, 3, 4] if [1, 2, 3, 4] and 3 are passed', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should not change the original array', () => {
    const array = [1, 2, 3, 4];
    myRemove(array, 2);
    expect(array).toEqual([1, 2, 3, 4]);
  });

  it('should return [1, 2, 3, 4] if [1, 2, 3, 4] and 5 are passed', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
