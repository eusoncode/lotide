// Defining the without function
const without = function(source, itemsToRemove) {
  // / If itemsToRemove is empty, return source
  if (itemsToRemove.length === 0) {
    return source;
  }

  let filtedArr = [];
  for (let j = 0; j < itemsToRemove.length; j++) {
    filtedArr = source.filter(element => element !== itemsToRemove[j]);
  }
  return filtedArr;
};

module.exports = without;