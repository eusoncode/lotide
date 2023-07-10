//Define eqArrays function that takes two arguments
const eqArrays = require('./eqArrays');

// Define the test function
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

module.exports = assertArraysEqual;