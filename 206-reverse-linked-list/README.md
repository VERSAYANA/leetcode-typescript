Given the head of a singly linked list, reverse the list, and return the reversed list.

#### Example 1:

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

#### Example 2:

```
Input: head = [1,2]
Output: [2,1]
```

#### Example 3:

```
Input: head = []
Output: []
```

#### Constraints:

- The number of nodes in the list is the range $[0, 5000]$.
- $-5000 <= Node.val <= 5000$

## Solution 1

```ts
function reverseList1(head: ListNode | null): ListNode | null {
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
```

- **Time complexity: $O(n)$** , where `n` is the number of nodes in the list
- **Space complexity: $O(n)$** , where `n` is the number of nodes in the list

## Solution 2

```ts
function reverseList2(head: ListNode | null): ListNode | null {
  let reverseHead = null;

  while (head) {
    reverseHead = new ListNode(head.val, reverseHead);
    head = head.next;
  }

  return reverseHead;
}
```

- **Time complexity: $O(n)$** , where `n` is the number of nodes in the list
- **Space complexity: $O(n)$** , where `n` is the number of nodes in the list

## Solution 3

```ts
function reverseList3(head: ListNode | null): ListNode | null {
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
```

- **Time complexity: $O(n)$** , where `n` is the number of nodes in the list
- **Space complexity: $O(1)$**
