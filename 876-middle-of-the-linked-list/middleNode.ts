import { ListNode } from "../utils.ts";

export function middleNode1(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const nodes: ListNode[] = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }

  return nodes[Math.floor(nodes.length / 2)];
}

export function middleNode2(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
