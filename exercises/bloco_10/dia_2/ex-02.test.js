const getUserName = require('./users');

describe('Test getUserName function with promise', () => {
  it('should return Paul if valid 5 is passed', () => {
    expect.assertions(1);
    return getUserName(5).then((name) => {
      expect(name).toBe('Paul');
    });
  });

  it('should return an error if an invalid id is passed', () => {
    expect.assertions(1);
    return getUserName(1).catch((error) => {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    });
  });
});
