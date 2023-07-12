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
  return filtedArr;
};

module.exports = without;
