const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  const result = countLetters("mass");
  it("returns 1 for 'm'", () => {
    assert.strictEqual(result['m'], 1);
  });
  it("returns 1 for 'a'", () => {
    assert.strictEqual(result['a'], 1);
  });
  it("returns 2 for 's'", () => {
    assert.strictEqual(result['s'], 2);
  });
});



