import { ListNode } from "../utils.ts";

export function reverseList1(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const listArray: number[] = [];
  while (head) {
    listArray.push(head.val);
    head = head.next;
  }

  const dummy = new ListNode();
  let current = dummy;

  for (let i = listArray.length - 1; i >= 0; i--) {
    const newNode: ListNode = new ListNode(listArray[i]);
    current.next = newNode;
    current = current.next;
  }

  return dummy.next;
}

export function reverseList2(head: ListNode | null): ListNode | null {
  let reverseHead = null;

  while (head) {
    reverseHead = new ListNode(head.val, reverseHead);
    head = head.next;
  }

  return reverseHead;
}

export function reverseList3(head: ListNode | null): ListNode | null {
  let previous = null;
  let current = head;
  let next = null;

  while (current) {
    next = current.next;
    current.next = previous;
    previous = current;
    current = next;
  }

  return previous;
}
