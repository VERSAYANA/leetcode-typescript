import { assertEquals } from "../deps.ts";
import { maxProfit1, maxProfit2 } from "./maxProfit.ts";

type Testcase = {
  prices: number[];
  output: number;
};

const testCases: Testcase[] = [
  {
    prices: [7, 1, 5, 3, 6, 4],
    output: 5,
  },
  {
    prices: [7, 6, 4, 3, 1],
    output: 0,
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(maxProfit1(testCase.prices), testCase.output);
  });

  Deno.test(`Solution 2 - Test case ${index + 1}`, () => {
    assertEquals(maxProfit2(testCase.prices), testCase.output);
  });
}
