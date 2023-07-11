const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe("#countLetters", () => {
  const result = countLetters("lighthouse in the house");
  it("returns 1 for 'l'", () => {
    assert.strictEqual(result['l'], 1);
  });
  it("returns 2 for 'i'", () => {
    assert.strictEqual(result['i'], 2);
  });
  it("returns 1 for 'g'", () => {
    assert.strictEqual(result['g'], 1);
  });
});



