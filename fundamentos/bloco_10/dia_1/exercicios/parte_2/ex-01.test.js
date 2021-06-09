const { encode, decode } = require('./ex-01');

describe('Testing encode function', () => {
  it('should be a function', () => {
    expect(typeof encode).toBe('function');
  });

  it('should return 1 if "a" is passed', () => {
    expect(encode('a')).toBe('1');
  });

  it('should return 2 if "e" is passed', () => {
    expect(encode('e')).toBe('2');
  });

  it('should return 3 if "i" is passed', () => {
    expect(encode('i')).toBe('3');
  });

  it('should return 4 if "o" is passed', () => {
    expect(encode('o')).toBe('4');
  });

  it('should return 5 if "u" is passed', () => {
    expect(encode('u')).toBe('5');
  });

  it('should return "H3 th2r2!" if "Hi there!" is passed', () => {
    expect(encode('Hi there!')).toBe('H3 th2r2!');
  });

  it('should return a string with the same length of parameter', () => {
    expect(encode('Hi there!').length).toBe(9);
  });
});

describe('Testing decode function', () => {
  it('should be a function', () => {
    expect(typeof decode).toBe('function');
  });

  it('should return "a" if "1" is passed', () => {
    expect(decode('1')).toBe('a');
  });

  it('should return "e" if "2" is passed', () => {
    expect(decode('2')).toBe('e');
  });

  it('should return "i" if "3" is passed', () => {
    expect(decode('3')).toBe('i');
  });

  it('should return "o" if "4" is passed', () => {
    expect(decode('4')).toBe('o');
  });

  it('should return "u" if "5" is passed', () => {
    expect(decode('5')).toBe('u');
  });

  it('should return "Hi there!" if "H3 th2r2!" is passed', () => {
    expect(decode('H3 th2r2!')).toBe('Hi there!');
  });

  it('should return a string with the same length of parameter', () => {
    expect(decode('H3 th2r2!').length).toBe(9);
  });
});
