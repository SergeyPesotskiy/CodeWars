//8 kyu
//
//Grasshopper - Summation
//
//Instructions
//
//Summation
//
//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
//
//For example (Input -> Output):
//
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
//
//Solution

function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}

//Sample Tests
//
//const assert = require('chai').assert;
//
//describe('summation', function () {
//  it('should return the correct total', function () {
//    assert.strictEqual(summation(1),  1);
//    assert.strictEqual(summation(2),  3);
//    assert.strictEqual(summation(8), 36);
//  })
//})
