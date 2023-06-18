//Defining the without function
const without = function(source, itemsToRemove) {
  let filtedArr = [];
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        filtedArr = source.filter(element => element !== itemsToRemove[j]);
      }
    }
  }
  // OR
  // for (let i = 0; i < source.length; i++) {
  //  filtedArr.push(itemsToRemove.includes(source[i]));
  // }
  return `This is the filtered array: [${filtedArr}]`;
};

//Define eqArrays function that takes two arguments
const eqArrays = function(arg1, arg2) {
  let newArray1 = [];
  let newArray2 = [];

  //Check if the length of both arrays match
  if (arg1.length !== arg2.length) {
    return '❌❌❌ One of the Arrays was modified';
  } else {
    //Loop through the arrays and compare each element
    for (let i = 0; i < arg1.length; i++) {
      if (arg1[i] === arg2[i]) {
        newArray1[i] = arg1[i];
        newArray2[i] = arg2[i];
      } else {
        return '❌❌❌ One of the Arrays was modified';
      }
    }
  }
  //check if both arrays match
  if (newArray1.toString() === newArray2.toString()) {
    return '✅✅✅ Both original Arrays are intact';
  }
};

// Define the test function
const assertArraysEqual = function(actual, expected) {
  console.log(eqArrays(actual, expected));
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);

assertArraysEqual(without([1, 2, 3], [3]), [1, 2, 3]); // => Same arrays
assertArraysEqual(without([1, 2, 3], [1]), [3, 2, 1]); // => Not same arrays

assertArraysEqual(without(["1", "2", "3"], ["3"]), ["1", "2", "3"]); // => Same arrays
assertArraysEqual(without(["1", "2", "3"], ["2"]), ["1", "2", 3]); // => Not same arrays