//8 kyu
//Twice as old
//
//Instructions
//
//Your function takes two arguments:
//
//    current father's age (years)
//    current age of his son (years)
//
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.
//
Solution

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  return Math.abs(dadYearsOld - 2 * sonYearsOld);
}

//Sample Tests
//
//const chai = require("chai");
//const assert = chai.assert;
//chai.config.truncateThreshold=0;
//
//describe("Sample tests", function(){
//  it("Testing for dad's age: 36 and son's age: 7", function(){
//    assert.strictEqual(twiceAsOld(36,7) , 22);
//  });
//  it("Testing for dad's age: 55 and son's age: 30", function(){
//    assert.strictEqual(twiceAsOld(55,30) , 5);
//  });
//  it("Testing for dad's age: 42 and son's age: 21", function(){
//    assert.strictEqual(twiceAsOld(42,21) , 0);
//  });
//  it("Testing for dad's age: 22 and son's age: 1", function(){
//    assert.strictEqual(twiceAsOld(22,1) , 20);
//  });
//  it("Testing for dad's age: 29 and son's age: 0", function(){
//    assert.strictEqual(twiceAsOld(29,0) , 29);
//  });
//});
