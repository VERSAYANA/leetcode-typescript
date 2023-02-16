import { assertEquals } from "../deps.ts";
import { isIsomorphic1, isIsomorphic2 } from "./isIsomorphic.ts";

type Testcase = {
  s: string;
  t: string;
  output: boolean;
};

const testCases: Testcase[] = [
  {
    s: "egg",
    t: "add",
    output: true,
  },
  {
    s: "foo",
    t: "bar",
    output: false,
  },
  {
    s: "paper",
    t: "title",
    output: true,
  },
  {
    s: "badc",
    t: "baba",
    output: false,
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(isIsomorphic1(testCase.s, testCase.t), testCase.output);
  });

  Deno.test(`Solution 2 - Test case ${index + 1}`, () => {
    assertEquals(isIsomorphic2(testCase.s, testCase.t), testCase.output);
  });
}
