const assert = require('chai').assert;
const without = require('../without');

describe("#without", () => {
  it("returns an array [\"hello\", \"world\"]", () => {    
    const words = ["hello", "world", "lighthouse"];
    assert.deepEqual(without(words, ["lighthouse"]), ["hello", "world"]);
  });  
  it("returns an array [1, 2]", () => {
    assert.deepEqual(without([1, 2, 3], [3]), [1, 2]);
  });  
  it("returns will return an array [2, 3]", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });  
  it("returns an array [\"1\", \"2\"]", () => {
    assert.deepEqual(without(["1", "2", "3"], ["3"]), ["1", "2"]);
  });  
  it("will not returns same array", () => { 
    assert.deepEqual(without(["1", "2", "3"], ["2"]), ["1", "2", 3]);
  });  
});
