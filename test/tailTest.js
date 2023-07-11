// test/assertEqualTest.js
// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// // TEST CODE
// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!


const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 3 as the number of items in that array [Yo Yo, Lighthouse, Labs]", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words); // no need to capture the return value since we are not checking it
    assert.deepEqual(words.length, 3); // original array should still have 3 elements!
  });
});