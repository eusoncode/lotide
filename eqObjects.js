// Importing eqArrays
const eqArrays = require('./eqArrays');

const eqObjects = function (object1, object2) {
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

module.exports = eqObjects;