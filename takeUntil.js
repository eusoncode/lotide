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


//Define the takeUntil function
const takeUntil = function(array, callbackNum) {
  let result = [];
  for (let item of array) {
    if (!callbackNum(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
assertArraysEqual(takeUntil(data2, y => y === ','), [ "I've", 'been', 'to', 'Hollywood' ]);