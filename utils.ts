export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function listNodeToArray(node: ListNode | null): number[] {
  // Initialize an empty array to store the values
  const array: number[] = [];
  // Loop through the linked list until reaching the end
  while (node !== null) {
    // Push the current node's value to the array
    array.push(node.val);
    // Move to the next node
    node = node.next;
  }
  // Return the array
  return array;
}

export function arrayToListNode(array: number[]): ListNode | null {
  // Initialize a dummy node to start the linked list
  const dummy: ListNode = new ListNode();
  // Initialize a pointer to the current node
  let current: ListNode | null = dummy;
  // Loop through the array
  for (const num of array) {
    // Create a new node with the current number as the value
    const newNode: ListNode = new ListNode(num);
    // Link the current node to the new node
    current.next = newNode;
    // Move the current node to the new node
    current = current.next;
  }
  // Return the next node of the dummy node, which is the head of the linked list
  return dummy.next;
}
