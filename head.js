//RETURN FIRST ITEM IN AN ARRAY
const head = function (bo) {
  let tea = bo[0];
  return tea;
};


//FUNCTION IMPLEMENTATION
const asserEquall = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
asserEquall(head([5,6,7]), 5);
asserEquall(head(["Hello", "Lighthouse", "Labs"]), "Hello");