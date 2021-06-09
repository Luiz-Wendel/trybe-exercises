const myFizzBuzz = require('./ex-04.js');

describe('Testing myFizzBuzz function', () => {
  it('should be a function', () => {
    expect(typeof myFizzBuzz).toBe('function');
  });

  it('should return "fizzbuzz" if a number divisible by 3 and 5 is passed', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });

  it('should return "fizz" if a number divisible only by 3 is passed', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });

  it('should return "buzz" if a number divisible only by 5 is passed', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });

  it('should return the number if a number not divisible by 3 or 5 is passed', () => {
    expect(myFizzBuzz(4)).toBe(4);
  });

  it('should return false if the parameter is not a number', () => {
    expect(myFizzBuzz('test')).toBe(false);
  });
});
