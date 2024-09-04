// Problem Title: Reverse Linked List
// Problem URL: https://leetcode.com/problems/reverse-linked-list

// Problem Statement:
// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// Example 2:
// Input: head = [1,2]
// Output: [2,1]

// Example 3:
// Input: head = []
// Output: []

// Solution:
// 1. Initialize a variable to keep track of the previous node as null
// 2. Iterate through the linked list
// 3. For each node, set the next node to the previous node
// 4. Update the previous node to the current node
// 5. Update the current node to the next node
// 6. Return the previous node as the new head
// Time complexity: O(n)
// Space complexity: O(1)

// Justification:
// The solution iterates through the linked list once and updates the next pointer of each node. The space complexity is O(1) as we only use a constant amount of space.
// The time complexity is O(n) as we iterate through the linked list once.
// The solution is optimal in terms of time and space complexity.
// The solution is accepted on LeetCode.

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  // Save a reference to the previous node.
  // Note: We want this to start off as `null` in order to create a new tail.
  let previousNode = null;

  // Iterate through the linked list by updating the `head` pointer to the next node until it gets to the tail, where `head.next` is `null`.
  while (head) {
    // Save a reference to the next node.
    const nextNode = head.next;

    // Set the next node of the current node to the previous node.
    head.next = previousNode;

    // Set the previous node to the current node.
    previousNode = head;

    // Set the current node to the next node.
    // Aka, continue the next iteration through the linked list.
    head = nextNode;
  }

  // Head should now be pointing to the last node in the original linked list.
  // All nodes should have had their `next` pointers updated to point to the previous node.
  return head;
}

// Test case 1
const testInput = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))),
);

console.log(reverseList(testInput));
