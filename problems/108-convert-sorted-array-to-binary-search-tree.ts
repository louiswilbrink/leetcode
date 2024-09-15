// Problem Title: Convert Sorted Array to Binary Search Tree
// Problem URL: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

// Problem:
// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.
// (A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.)

// Solution:
// We can build a height-balanced binary search tree by using a recursive approach.
// The idea is to find the middle element of the array and make it the root of the tree.
// Then, we recursively build the left and right subtrees using the left and right halves of the array.

function sortedArrayToBST(nums: number[]): TreeNode | null {
  // Base case: if the array is empty, return null
  if (nums.length === 0) {
    return null;
  }

  // Find the middle element of the array
  const midIndex = Math.floor(nums.length / 2);

  // Create a new node with the middle element as the root
  const root = new TreeNode(nums[midIndex]);

  // Recursively build the left subtree with the left half of the array
  root.left = sortedArrayToBST(nums.slice(0, midIndex));

  // Recursively build the right subtree with the right half of the array
  root.right = sortedArrayToBST(nums.slice(midIndex + 1));

  return root;
}
