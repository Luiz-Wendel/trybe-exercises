/* Source: https://github.com/CodeYourFuture/js-exercises-tdd/tree/master/III.tdd-katas/password-verifier */
const assert = require('assert');

const verify = (password) => {
  if (!password || password.length <= 8 || !password.match(/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)/g)) return false

  return true;
};

// password should be larger than 8 chars
assert.strictEqual(verify('1234567'), false);
// password should not be null
assert.strictEqual(verify(), false);
// password should have one uppercase letter at least
assert.strictEqual(verify('123asdfas'), false);
// password should have one lowercase letter at least
assert.strictEqual(verify('123ASDASF'), false);
// password should have one number at least
assert.strictEqual(verify('asddASDASF'), false);
// correct password
assert.strictEqual(verify('asddAS3ASF'), true);
