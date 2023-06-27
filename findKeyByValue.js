///TESTING CODE
const assertEqual = function(actual, expected) {
  (actual === expected) ?  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (key in obj && obj[key] !== undefined && obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

//RUN TEST
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);