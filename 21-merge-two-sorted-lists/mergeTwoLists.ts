import { ListNode } from "../utils.ts";

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null) return list2;
  if (list2 === null) return list1;

  const dummy = new ListNode();
  let current = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    // Move the current forward. Also, on the first iteration, this separates the dummy from current.
    current = current.next;
  }

  current.next = list1 || list2;

  return dummy.next;
}
