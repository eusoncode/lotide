//Define the takeUntil function
const takeUntil = function(array, callbackNum) {
  let result = [];
  for (let item of array) {
    if (!callbackNum(item)) {
      result.push(item);
    } else {
      return result;
    }
  }
};

module.exports = takeUntil;