const testPhrase = 'Antônio foi no banheiro e não sabemos o que aconteceu';

const longestWord = (phrase) => {
  const words = phrase.split(' ');
  let longest = words[0];

  words.forEach((word) => {
    if (word.length > longest.length) longest = word;
  });

  return longest;
}

console.log(`Longest word in phrase is: ${longestWord(testPhrase)}`);
