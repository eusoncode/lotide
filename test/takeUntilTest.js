const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe("#takeUntil", () => {
  const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
  const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];

  it("returns an array [1, 2, 5, 7, 2]", () => {
    assert.deepEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2]);
  });
  it("returns an array same as [\"I've\", 'been', 'to', 'Hollywood']", () => {
    assert.deepEqual(takeUntil(data2, y => y === ','), [ "I've", 'been', 'to', 'Hollywood' ]);
  });
});
