const loopyLighthouse = function(range, multiples, words) {
  const start = range[0];
  const end = range[1];
  const multiple1 = multiples[0];
  const multiple2 = multiples[1];
  const word1 = words[0];
  const word2 = words[1];

  for (let i = start; i <= end; i++) {
    if (i % multiple1 === 0 && i % multiple2 === 0) {
      console.log(word1 + word2);
    } else if (i % multiple1 === 0) {
      console.log(word1);
    } else if (i % multiple2 === 0) {
      console.log(word2);
    } else {
      console.log(i);
    }
  }
};

// Example usage
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);