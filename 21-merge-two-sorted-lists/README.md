You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

Example 1:

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

Example 2:

```
Input: list1 = [], list2 = []
Output: []
```

Example 3:

```
Input: list1 = [], list2 = [0]
Output: [0]
```

Constraints:

- The number of nodes in both lists is in the range $[0, 50]$.
- $-100 <= Node.val <= 100$
- Both `list1` and `list2` are sorted in non-decreasing order.

## Solution

```ts
function mergeTwoLists(
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
```

- **Time complexity: $O(m + n)$** , where `m` and `n` are the lengths of the two lists
- **Space complexity: $O(1)$**
