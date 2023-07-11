const letterPositions = function(sentence) {
  const results = {};

  for (const index in sentence) {
    let letter = sentence[index].toLowerCase();

    if (letter !== ' ' && letter > 'a' && letter < 'z') {
      !results[letter] ? results[letter] = [Number(index)] : results[letter].push(Number(index));
    }
  }
  return results;
};

module.exports = letterPositions;