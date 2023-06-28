///TESTING CODE
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetter = function(arg1) {
  const newSen2 = {};

  for (const letter of arg1) {
    if (letter >= 'a' && letter <= 'z') {
      newSen2[letter] ? newSen2[letter]++ : newSen2[letter] = 1;
    }
  }
  
  return newSen2;
};

const result = countLetter("lighthouse in the house");
assertEqual(result['l'], 1);