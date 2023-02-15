import { assertEquals } from "../deps.ts";
import { runningSum } from "./runningSum.ts";

type Testcase = {
  nums: number[];
  output: number[];
};

const testCases: Testcase[] = [
  {
    nums: [1, 2, 3, 4],
    output: [1, 3, 6, 10],
  },
  {
    nums: [1, 1, 1, 1, 1],
    output: [1, 2, 3, 4, 5],
  },
  {
    nums: [3, 1, 2, 10, 1],
    output: [3, 4, 6, 16, 17],
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Test case ${index + 1}`, () => {
    assertEquals(runningSum(testCase.nums), testCase.output);
  });
}
