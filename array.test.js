const cloneArray = require("./cloneArray");

test("Successfuly add two integer numbers", () => {
  expect(cloneArray([1, 2])).not.toBe([1, 2]);
});
test("faild add two integer numbers", () => {
  expect(cloneArray([1, 2])).toStrictEqual([3]);
});
