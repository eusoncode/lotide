const countLetters = function(arg) {
  const newArg = {};

  for (const letter of arg) {
    if (letter >= 'a' && letter <= 'z') {
      newArg[letter] ? newArg[letter]++ : newArg[letter] = 1;
    }
  }
  
  return newArg;
};

module.exports = countLetters;