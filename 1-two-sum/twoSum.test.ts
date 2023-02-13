import { assertEquals } from "../deps.ts";
import { twoSum } from "./twoSum.ts";

type Testcase = {
  nums: number[];
  target: number;
  output: number[];
};

const testCases: Testcase[] = [
  {
    nums: [2, 7, 11, 15],
    target: 9,
    output: [0, 1],
  },
  {
    nums: [3, 2, 4],
    target: 6,
    output: [1, 2],
  },
  {
    nums: [3, 3],
    target: 6,
    output: [0, 1],
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Test case ${index + 1}`, () => {
    assertEquals(twoSum(testCase.nums, testCase.target), testCase.output);
  });
}
