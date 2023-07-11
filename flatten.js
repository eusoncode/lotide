//Define the function to determin the flatten
const flatten = function(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      for (let g = 0; g < array[i].length; g++) {
        newArray.push(array[i][g]);
      }
    }
  }
  return newArray.sort();
};

module.exports = flatten;