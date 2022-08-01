import { sum, mult } from "./calculator.spec";

it("should return stored 12", () => {
  const resSum = sum(10, 2);
  expect(resSum).toEqual(12);
});

it("should return stored 7", () => {
  const resSum = sum(1, 6);
  expect(resSum).toEqual(7);
});

it("should return stored 18", () => {
  const resMult = mult(3, 6);
  expect(resMult).toEqual(18);
});

it("should return stored 100", () => {
  const resMult = mult(25, 4);
  expect(resMult).toEqual(100);
});
