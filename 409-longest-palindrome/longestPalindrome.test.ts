import { assertEquals } from "../deps.ts";
import { longestPalindrome1 } from "./longestPalindrome.ts";

type Testcase = {
  s: string;
  output: number;
};

const testCases: Testcase[] = [
  {
    s: "abccccdd",
    output: 7,
  },
  {
    s: "a",
    output: 1,
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(longestPalindrome1(testCase.s), testCase.output);
  });
}
