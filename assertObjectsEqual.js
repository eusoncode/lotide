// Check if two objects are equal
const eqObjects = function (object1, object2) {
  let newObject1 = Object.keys(object1);
  let newObject2 = Object.keys(object2);

  if (newObject1.length === newObject2.length) {
    for (item of newObject1) {      
      if (!Array.isArray(object1[item])) {
        if (object1[item] === object2[item]) {
          return true;
        } else {
          return false;
        }
      } else {
        if (eqArrays(object1[item], object2[item])) {
          return true;
        } else {
          return false;
        }        
      }
    }
  } else {
    return false;
  }
};

//Check if two arrays are equal
const eqArrays = function(arg1, arg2) {
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
  }
  //check if both arrays match
  return newArray1.toString() === newArray2.toString();
};

// Prints assertion message
const assertObjectsEqual = function (actual, expected) {
  const inspect = require('util').inspect;

  const printStatement = eqObjects(actual, expected) ? `✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}` : `❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`;

  console.log(printStatement);
};

//Test code
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);