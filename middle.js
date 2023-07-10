//Define eqArrays function that takes two arguments
const eqArrays = require('./eqArrays');

//Define assertArraysEqual function that takes two arguments
const assertArraysEqual = require('./assertArraysEqual');

//Define the function to determine the middle number
const middle = function(array) {
  let middleItem = [];
  if (array.length > 1) {
    if (array.length % 2 === 0) {//even
      let value = array.length / 2;
      middleItem = array.slice(value - 1, value + 1);
    } else { //odd
      return middleItem = array[Math.floor(array.length / 2)];
    }
  } else {
    console.log('No middle item');
  }
  return middleItem;
};

module.exports = middle;