function encode(string) {
  let charactersArray = string.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let decodedArray = [];

  for (let character of charactersArray) {
    if (vowels.indexOf(character) >= 0) decodedArray.push(vowels.indexOf(character) + 1);
    else decodedArray.push(character);
  }

  return decodedArray.join('');
}

function decode(decodedString) {
  let decodedArray = decodedString.split('');
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let charactersArray = [];

  for (let character of decodedArray) {
    if (Object.keys(vowels).indexOf(character) >= 0) charactersArray.push(vowels[character]);
    else charactersArray.push(character);
  }

  return charactersArray.join('');
}

module.exports = { encode, decode };
