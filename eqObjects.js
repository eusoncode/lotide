//Define eqArrays function that takes two arguments
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

// //FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  (actual === expected) ?  console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  let newObject1 = Object.keys(object1);
  let newObject2 = Object.keys(object2);

  if (newObject1.length === newObject2.length) {
    for (const item of newObject1) {
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

// TEST CODE
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long"};
assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false

