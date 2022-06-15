const caesarCipher = require("./caesarCipher");

test("Test 1", () => {
  expect(caesarCipher("zoe", 1)).toMatch("apf");
});

test("Test 2", () => {
  expect(caesarCipher("abc", 2)).toMatch("cde");
});

test("Test 3", () => {
  expect(caesarCipher("abc", 4)).toMatch("efg");
});

test("Test 2 repeat", () => {
  expect(caesarCipher("abc", 2)).toMatch("cde");
});

test("Test 5", () => {
  expect(caesarCipher("abcccC", 3)).toMatch("defffF");
});

test("Test 6", () => {
  expect(caesarCipher("a b c", 2)).toMatch("c d e");
});

test("Test 7", () => {
  expect(caesarCipher("abc bbb cee", 3)).toMatch("def eee fhh");
});
