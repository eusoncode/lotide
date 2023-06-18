//Define the function to determin the flatten
const flatten = function (array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    }else {
      for (let g = 0; g < array[i].length; g++) {
        newArray.push(array[i][g]); 
      };
    }
  }
  return newArray;
};

//Define eqArrays function that takes two arguments 
const eqArrays = function (arg1, arg2) {
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
        return '❌❌❌ Both Arrays are not equal'
      }    
    }
  };  
  //check if both arrays match
  if (newArray1.toString() === newArray2.toString()) {
    return '✅✅✅ Both Arrays are equal';
  }
};

// Define the test function
const assertArraysEqual = function (actual, expected) {
  console.log(eqArrays(actual, expected));
};

assertArraysEqual(flatten([1, 2, 3, [4], 5, [6, 7]]), [1, 2, 3, 4, 5, 6, 7]) // => Same arrays
assertArraysEqual(flatten([1, 4, 3, [7], 3, [5, 6]]), [1, 2, 3, 4, 5, 6, 7]) // => Not same arrays