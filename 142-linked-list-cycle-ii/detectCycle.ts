import { ListNode } from "../utils.ts";

export function detectCycle1(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  const nodes = new Set<ListNode>();

  while (head) {
    if (nodes.has(head)) {
      return head;
    } else [nodes.add(head)];

    head = head.next;
  }

  return null;
}

export function detectCycle2(head: ListNode | null): ListNode | null {
  if (head === null) return null;
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      while (head !== slow) {
        head = head!.next;
        slow = slow!.next;
      }
      return head;
    }
  }

  return null;
}
