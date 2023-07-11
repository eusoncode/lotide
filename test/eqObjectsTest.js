const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
   
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long"};

describe("#eqObjects", () => {
  it("returns a boolean true", () => {
    assert.strictEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true
  });
  it("returns a boolean false", () => {
    assert.strictEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => true
  });
  it("returns a boolean true", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true
  });
  it("returns a boolean false", () => {
    assert.strictEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
  });
});