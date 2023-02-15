import { assertEquals } from "../deps.ts";
import { pivotIndex1, pivotIndex2 } from "./pivotIndex.ts";

type Testcase = {
  nums: number[];
  output: number;
};

const testCases: Testcase[] = [
  {
    nums: [1, 7, 3, 6, 5, 6],
    output: 3,
  },
  {
    nums: [1, 2, 3],
    output: -1,
  },
  {
    nums: [2, 1, -1],
    output: 0,
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(pivotIndex1(testCase.nums), testCase.output);
  });

  Deno.test(`Solution 2 - Test case ${index + 1}`, () => {
    assertEquals(pivotIndex2(testCase.nums), testCase.output);
  });
}
