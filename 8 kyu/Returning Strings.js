/*
8 kyu
Returning Strings

Instructions

Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]

Solution
*/

function greet(name) {
    //your code here
    return "Hello, " + name + " how are you doing today?";
}

/*
Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests",() =>{
  it("Testing for fixed tests", () => {
    assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
    assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
  })
})
*/
