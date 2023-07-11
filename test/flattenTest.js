const assert = require('chai').assert;
const flatten = require('../flatten');

describe("#flatten", () => {
  it("returns an array of the two flatten numbers in the array [1, 2, 3, [4], 5, [6, 7]]", () => {
    assert.deepEqual(flatten([1, 2, 3, [4], 5, [6, 7]]), [1, 2, 3, 4, 5, 6, 7]); // => Same arrays
  });
  it("returns the flatten number of the array [1, 4, 3, [7], [5, 6]]", () => {
    assert.deepEqual(flatten([1, 4, 3, [7], [5, 6]]), [1, 2, 3, 4, 5, 6, 7]); // => Not same arrays
  });
});

