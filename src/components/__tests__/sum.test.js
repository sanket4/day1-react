import { sum } from "../sum";

test("sum function should return sum of 2 numbers", () => {
  const result = sum(3, 2);
  expect(result).toBe(5);
});
