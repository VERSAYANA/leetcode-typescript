import { assertEquals } from "../deps.ts";
import { arrayToListNode, ListNode, listNodeToArray } from "../utils.ts";
import { reverseList1, reverseList2, reverseList3 } from "./reverseList.ts";

type Testcase = {
  head: ListNode | null;
  output: ListNode | null;
};

const testCases: Testcase[] = [
  {
    head: arrayToListNode([1, 2, 3, 4, 5]),
    output: arrayToListNode([5, 4, 3, 2, 1]),
  },
  {
    head: arrayToListNode([1, 2]),
    output: arrayToListNode([2, 1]),
  },
  {
    head: arrayToListNode([]),
    output: arrayToListNode([]),
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Solution 1 - Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(reverseList1(testCase.head)),
      listNodeToArray(testCase.output)
    );
  });

  Deno.test(`Solution 2 - Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(reverseList2(testCase.head)),
      listNodeToArray(testCase.output)
    );
  });

  Deno.test(`Solution 3 - Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(reverseList3(testCase.head)),
      listNodeToArray(testCase.output)
    );
  });
}
