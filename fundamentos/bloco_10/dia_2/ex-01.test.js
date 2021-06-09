const uppercase = require('./ex-01');

describe('Test uppercase function', () => {
  it('should call the callback function', (done) => {
    uppercase('string', (upperCase) => {
      expect(upperCase).toBe('STRING');
      done();
    });
  });
});
