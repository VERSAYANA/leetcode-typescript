import { assertEquals } from "../deps.ts";
import { arrayToListNode, ListNode, listNodeToArray } from "../utils.ts";
import { mergeTwoLists } from "./mergeTwoLists.ts";

type Testcase = {
  list1: ListNode | null;
  list2: ListNode | null;
  output: ListNode | null;
};

const testCases: Testcase[] = [
  {
    list1: arrayToListNode([1, 2, 4]),
    list2: arrayToListNode([1, 3, 4]),
    output: arrayToListNode([1, 1, 2, 3, 4, 4]),
  },
  {
    list1: arrayToListNode([]),
    list2: arrayToListNode([]),
    output: arrayToListNode([]),
  },
  {
    list1: arrayToListNode([]),
    list2: arrayToListNode([0]),
    output: arrayToListNode([0]),
  },
];

for (const [index, testCase] of testCases.entries()) {
  Deno.test(`Test case ${index + 1}`, () => {
    assertEquals(
      listNodeToArray(mergeTwoLists(testCase.list1, testCase.list2)),
      listNodeToArray(testCase.output)
    );
  });
}
