import { assertEquals } from "../deps.ts";
import { isIsomorphic } from "./isIsomorphic.ts";

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
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Test case ${index + 1}`, () => {
    assertEquals(isIsomorphic(testCase.s, testCase.t), testCase.output);
  });
}
