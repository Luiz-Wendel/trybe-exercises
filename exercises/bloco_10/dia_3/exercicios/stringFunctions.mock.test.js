const stringFunctions = require('./stringFunctions');

jest.mock('./stringFunctions')

describe('#stringFunctions with mock', () => {
  describe('uppercase mock', () => {
    it('should return string in lowercase when mocked #ex.04', () => {
      stringFunctions.uppercase.mockImplementation((string) => string.toLowerCase());

      stringFunctions.uppercase('XABLAU');
      expect(stringFunctions.uppercase).toHaveBeenCalled();
      expect(stringFunctions.uppercase('TEST')).toBe('test');
      expect(stringFunctions.uppercase('THIS IS A TEST')).toBe('this is a test');
      expect(stringFunctions.uppercase).toHaveBeenCalledTimes(3);
    });
  });

  describe('firstChar mock', () => {
    it('should return the last char when mocked #ex.04', () => {
      stringFunctions.firstChar.mockImplementation((string) => string.slice(-1));

      stringFunctions.firstChar('XABLAU');
      expect(stringFunctions.firstChar).toHaveBeenCalled();
      expect(stringFunctions.firstChar('testing')).toBe('g');
      expect(stringFunctions.firstChar('this is a test')).toBe('t');
      expect(stringFunctions.firstChar('xablau')).toBe('u');
      expect(stringFunctions.firstChar).toHaveBeenCalledTimes(4);
    });
  });

  describe('concat mock', () => {
    it('should return the concatenation of three strings when mocked #ex.04', () => {
      stringFunctions.concat.mockImplementation(
        (firstString, secondString, thirdString) => `${firstString}${secondString}${thirdString}`
      );

      stringFunctions.concat('THIS', 'IS', 'XABLAU');
      expect(stringFunctions.concat).toHaveBeenCalled();
      expect(stringFunctions.concat('testing ', 'this', ' function')).toBe('testing this function');
      expect(stringFunctions.concat('THIS ', 'IS', ' XABLAU')).toBe('THIS IS XABLAU');
      expect(stringFunctions.concat).toHaveBeenCalledTimes(3);
    });
  });
});
