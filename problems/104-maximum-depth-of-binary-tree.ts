// Problem Title: Maximum Depth of Binary Tree
// Problem URL: https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Problem Statement:
// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path from
// the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
//      3
//     / \
//    9  20
//      /  \
//     15   7
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Solution:
// Recursively traverse the tree, both left & right, starting from the root node.
// Each recursive call adds +1 to a call stack counter.
// Each node accumulates the maximum depth of the left and right subtrees, but should only return the larger depth count of the two using Math.max().

function maxDepth(root: TreeNode | null): number {
  if (!root) return 0;
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
}
