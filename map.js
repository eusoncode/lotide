//Define eqArrays function that takes two arguments
const eqArrays = function(arg1, arg2) {
  let newArray1 = [];
  let newArray2 = [];

  //Check if the length of both arrays match
  if (arg1.length !== arg2.length) {
    return '❌❌❌ Both Arrays are not the same';
  } else {
    //Loop through the arrays and compare each element
    for (let i = 0; i < arg1.length; i++) {
      if (arg1[i] === arg2[i]) {
        newArray1[i] = arg1[i];
        newArray2[i] = arg2[i];
      } else {
        return '❌❌❌ Both Arrays are not the same';
      }
    }
  }
  //check if both arrays match
  if (newArray1.toString() === newArray2.toString()) {
    return '✅✅✅ Both Arrays are the same';
  }
};

// Define the test function
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

//Define the map function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;