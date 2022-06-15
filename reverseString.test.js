const reverseString = require("./reverseString");

test("With a name", () => {
  expect(reverseString("george")).toMatch("egroeg");
});

test("With a name 2", () => {
  expect(reverseString("jenny")).toMatch("ynnej");
});

test("More than one word", () => {
  expect(reverseString("i like apples")).toMatch("selppa ekil i");
});
