const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns an array of the two middle numbers in the array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6]); // => Same arrays
  });
  it("returns the middle number of the array [1, 2, 3, 4, 5, 6, 7]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7]), 4); // => Same arrays
  });
  it("returns the middle number of the array [1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), 5); // => Same arrays
  });
});