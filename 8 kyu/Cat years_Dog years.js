/*
8 kyu
Cat years, Dog years

Kata Task

I have a cat and a dog.

I got them at the same time as kitten / puppy.That was humanYears years ago.

Return their respective ages now as[humanYears, catYears, dogYears]

NOTES:

    humanYears >= 1
humanYears are whole numbers only

Cat Years

15 cat years
for first year
    +
    9 cat years
for second year
    +
    4 cat years
for each year after that

Dog Years

15 dog years
for first year
    +
    9 dog years
for second year
    +
    5 dog years
for each year after that

Solution*/

function humanYearsCatYearsDogYears(humanYears) {
    let catYears = 0;
    let dogYears = 0;

    if (humanYears === 1) {
        catYears = 15;
        dogYears = 15;
    } else if (humanYears === 2) {
        catYears = 15 + 9;
        dogYears = 15 + 9;
    } else {
        catYears = 15 + 9 + (4 * (humanYears - 2));
        dogYears = 15 + 9 + (5 * (humanYears - 2));
    }

    return [humanYears, catYears, dogYears];
}

/*Sample Tests

const Test = require('@codewars/test-compat');

describe("Example Tests", function() {

  it("one", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(1), [1,15,15]);
  });

  it("two", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(2), [2,24,24]);
  });

  it("ten", function() {
    Test.assertSimilar(humanYearsCatYearsDogYears(10), [10,56,64]);
  });

});*/
