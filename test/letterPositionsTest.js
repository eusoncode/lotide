const assert = require('chai').assert;
const letterPositions = require('../letterPositions');

describe("#letterPositions", () => {
  it("returns an array of [2, 3]", () => {
    assert.deepEqual(letterPositions("hello").l, [2, 3]);
  });
  it("returns an array of [3, 5, 15, 18])", () => {
    assert.deepEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);
  });
});