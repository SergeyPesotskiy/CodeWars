/*8 kyu
Count of positives / sum of negatives

Instructions

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

Solution*/

function countPositivesSumNegatives(input) {
  // your code here
      if (input === null || input.length === 0) {
    return [];
  }

  let countPositives = 0;
  let sumNegatives = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      countPositives++;
    } else if (input[i] < 0) {
      sumNegatives += input[i];
    }
  }

  return [countPositives, sumNegatives];
}

/*Sample Tests

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example tests", () => {
  it("Testing for fixed test 1", () => {
    let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
    let actual = countPositivesSumNegatives(testData);
    let expected = [10, -65];
    assert.deepEqual(actual, expected);
  })

  it("Testing for fixed test 2", () => {
    let testData = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
    let actual = countPositivesSumNegatives(testData);
    let expected = [8, -50];
    assert.deepEqual(actual, expected);
  });
});*/
