const findKeyByValue = function (obj, val) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key) && obj[key] === val) {
      return key;
    }
  }
  return null; // Return null if no key is found
}

// Example usage
const obj = { name: "Eustace", age: 30, city: "New York" };
const valueToFind = "Eustace";
const key = findKeyByValue(obj, valueToFind);

console.log(findKeyByValue(obj, valueToFind));
