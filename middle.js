//Define the function to determine the middle number
const middle = function(array) {
  let middleItem = [];
  if (array.length > 3) {
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

//Define eqArrays function that takes two arguments
const eqArrays = function(arg1, arg2) {
  let newArray1 = [];
  let newArray2 = [];

  //Check if the length of both arrays match
  if (arg1.length !== arg2.length) {
    return '❌❌❌ Both Arrays are not equal';
  } else {
    //Loop through the arrays and compare each element
    for (let i = 0; i < arg1.length; i++) {
      if (arg1[i] === arg2[i]) {
        newArray1[i] = arg1[i];
        newArray2[i] = arg2[i];
      } else {
        return '❌❌❌ Both Arrays are not equal';
      }
    }
  }
  //check if both arrays match
  if (newArray1.toString() === newArray2.toString()) {
    return '✅✅✅ Both Arrays are equal';
  }
};

// Define the test function
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => Same arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), 4); // => Same arrays
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 5]); // => Same arrays