import { assertEquals } from "../deps.ts";
import { isSubsequence } from "./isSubsequence.ts";

type Testcase = {
  s: string;
  t: string;
  output: boolean;
};

const testCases: Testcase[] = [
  {
    s: "abc",
    t: "ahbgdc",
    output: true,
  },
  {
    s: "axc",
    t: "ahbgdc",
    output: false,
  },
  {
    s: "abc",
    t: "",
    output: false,
  },
  {
    s: "acb",
    t: "ahbgdc",
    output: true,
  },
  {
    s: "aaaaaa",
    t: "bbaaaa",
    output: true,
  },
  {
    s: "bb",
    t: "ahbgdc",
    output: false,
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Test case ${index + 1}`, () => {
    assertEquals(isSubsequence(testCase.s, testCase.t), testCase.output);
  });
}
