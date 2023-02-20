Given the `head` of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

#### Example 1:

```
Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
```

#### Example 2:

```
Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
```

#### Constraints:

- The number of nodes in the list is in the range $[1, 100]$.
- $1 <= Node.val <= 100$

## Solution 1

```ts
function middleNode1(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const nodes: ListNode[] = [];
  while (head) {
    nodes.push(head);
    head = head.next;
  }

  return nodes[Math.floor(nodes.length / 2)];
}
```

- **Time complexity: $O(n)$** , where `n` is the number of nodes in the linked list
- **Space complexity: $O(n)$**, where `n` is the number of nodes in the linked list

## Solution 2

```ts
function middleNode2(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let slowPointer: ListNode | null = head;
  let fastPointer: ListNode | null = head;

  while (fastPointer && fastPointer.next) {
    slowPointer = slowPointer!.next;
    fastPointer = fastPointer.next.next;
  }

  return slowPointer;
}
```

- **Time complexity: $O(n)$** , where `n` is the number of nodes in the linked list
- **Space complexity: $O(1)$**
