// Define the test function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Define eqArrays function that takes two arguments 
const eqArrays = function (arg1, arg2) {
  let newArray1 = [];
  let newArray2 = [];

  //Check if the length of both arrays match
  if (arg1.length !== arg2.length) {
    return false;  
  } else {
    //Loop through the arrays and compare each element
    for (let i = 0; i < arg1.length; i++) {
      if (arg1[i] === arg2[i]) {
        newArray1[i] = arg1[i];
        newArray2[i] = arg2[i];
      } else {
        return false;
      }    
    }
  };  
  //check if both arrays match
  if (newArray1.toString() === newArray2.toString()) {
    return true;
  }
};

eqArrays([1, 2, 3], [1, 2, 3, 1]) // => false
// eqArrays([1, 2, 3], [3, 2, 1]) // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 1]), false); // => should PASS
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true); // => should PASS
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]) , false); // => should PASS



