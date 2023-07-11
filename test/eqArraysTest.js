const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("#eqArrays", () => {
  it("returns a boolean false", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [1, 2, 3, 1]), false);
  });
  it("returns a boolean false", () => {
    assert.deepEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
  });
  it("returns a boolean true", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]) , true);
  });
  it("returns a boolean false", () => {
    assert.deepEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
});