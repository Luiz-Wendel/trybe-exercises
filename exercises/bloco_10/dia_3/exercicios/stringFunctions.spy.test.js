const stringFunctions = require('./stringFunctions');

describe('#stringFunctions with spy', () => {
  describe('uppercase mock', () => {
    it('should return string in lowercase when mocked and then restore original implementation #ex.05', () => {
      const mockedUppercase = jest.spyOn(stringFunctions, 'uppercase')
        .mockImplementation((string) => string.toLowerCase());

      stringFunctions.uppercase('XABLAU');
      expect(mockedUppercase).toHaveBeenCalled();
      expect(stringFunctions.uppercase('TEST')).toBe('test');
      expect(stringFunctions.uppercase('THIS IS A TEST')).toBe('this is a test');
      expect(mockedUppercase).toHaveBeenCalledTimes(3);

      mockedUppercase.mockRestore();

      expect(stringFunctions.uppercase('xablau')).toBe('XABLAU');
    });
  });
});
