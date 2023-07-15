//Define eqArrays function that takes two arguments
const eqArrays = require('./eqArrays');

// Define the test function
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Same arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Not same arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Same arrays
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Not same arrays

module.exports = assertArraysEqual;