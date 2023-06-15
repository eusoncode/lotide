//FUNCTION IMPLEMENTATION
const asserEquall = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
asserEquall("Lighthouse Labs", "Bootcamp");
asserEquall(1, 1);

