const { obj1, obj2, obj3 } = require('./ex-05.js');

describe('Testing JSON objects', () => {
  it('should be an object', () => {
    expect(typeof obj1).toBe('object');
    expect(typeof obj2).toBe('object');
    expect(typeof obj3).toBe('object');
  });

  it('should be equal', () => {
    expect(obj1).toEqual(obj2);
  });

  it('should not be equal', () => {
    expect(obj1).not.toEqual(obj3);
  });
});
