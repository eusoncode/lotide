const findKeyByValue = function(obj, val) {
  for (let key in obj) {
    if (key in obj && obj[key] !== undefined && obj[key] === val) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;