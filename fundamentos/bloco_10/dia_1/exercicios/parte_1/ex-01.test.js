const sum = require('./ex-01.js');

describe('Testing Sum function', () => {
  it('should be a function', () => {
    expect(typeof sum).toBe('function');
  });

  it('should return 9 if 4 and 5 are passed', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return 0 if 0 and 0 are passed', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw an error when a string is passed', () => {
    expect(() => sum(5, "5")).toThrow();
  });

  it('should throw the message "parameters must be numbers" when a string is passed', () => {
    expect(() => sum(5, "5")).toThrow(new Error('parameters must be numbers'));
  });
});
