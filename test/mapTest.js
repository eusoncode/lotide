const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words = ["ground", "control", "to", "major", "tom"];

  it("returns an array ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns an array same as ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
  });
  it("returns an array ['g', 'c', 't', 'm', 't']", () => {
    assert.deepEqual(map(words, word => word[0] + '*'), [ 'g*', 'c*', 't*', 'm*', 't*' ]);
  });
});
