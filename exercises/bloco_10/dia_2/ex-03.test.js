const getUserName = require('./users');

describe('Test getUserName function with async/await', () => {
  it('should return Paul if valid 5 is passed', async () => {
    expect.assertions(1);
    const userName = await getUserName(5);
    expect(userName).toBe('Paul');
  });

  it('should return an error if an invalid id is passed', async () => {
    expect.assertions(1);
    try {
      await getUserName(1);
    } catch (error) {
      expect(error).toEqual({ error: 'User with 1 not found.' });
    }
  });
});
