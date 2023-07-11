const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => Same arrays
assertArraysEqual([1, 2, 3], [3, 2, 1]); // => Not same arrays

assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]); // => Same arrays
assertArraysEqual(["1", "2", "3"], ["1", "2", 3]); // => Not same arrays