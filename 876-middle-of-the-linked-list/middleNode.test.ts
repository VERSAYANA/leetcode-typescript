import { assertEquals } from "../deps.ts";
import { arrayToListNode, ListNode, listNodeToArray } from "../utils.ts";
import { middleNode1, middleNode2 } from "./middleNode.ts";

type Testcase = {
  head: ListNode | null;
  output: ListNode | null;
};

const testCases: Testcase[] = [
  {
    head: arrayToListNode([1, 2, 3, 4, 5]),
    output: arrayToListNode([3, 4, 5]),
  },
  {
    head: arrayToListNode([1, 2, 3, 4, 5, 6]),
    output: arrayToListNode([4, 5, 6]),
  },
  {
    head: arrayToListNode([]),
    output: arrayToListNode([]),
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(middleNode1(testCase.head)),
      listNodeToArray(testCase.output)
    );
  });

  Deno.test(`Solution 2 - Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(middleNode2(testCase.head)),
      listNodeToArray(testCase.output)
    );
  });
}
