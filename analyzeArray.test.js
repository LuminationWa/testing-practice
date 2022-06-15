const analyzeArray = require("./analyzeArray");

test("Test 1", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test("Test 2", () => {
  expect(analyzeArray([1, 1, 1, 1, 1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 5,
  });
});

test("Test 3", () => {
  expect(analyzeArray([2, 1, 2, 1, 2, 10, 1])).toEqual({
    average: 2.7142857142857144,
    min: 1,
    max: 10,
    length: 7,
  });
});

test("Test 4", () => {
  expect(analyzeArray([0, 0, 0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 3,
  });
});
