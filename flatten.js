const flatten = function(array) {
  let newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      newArray.push(array[i]);
    } else {
      // recursive call to flatten for nested arrays
      const subArray = flatten(array[i]);
      newArray = newArray.concat(subArray);
    }
  }

  return newArray.sort();
};

module.exports = flatten;