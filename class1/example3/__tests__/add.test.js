const add = require("../index");

test("adds 2 + 3 to equal 5", () => {
  expect(add(2, 3)).toBe(6);
});

test("adds 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});
