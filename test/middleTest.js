//Define assertArraysEqual function that takes two arguments
const assertArraysEqual = require('../assertArraysEqual');

//Define assertArraysEqual function that takes two arguments
const middle = require('../middle');

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => Same arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), 4); // => Same arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 5]); // => Same arrays