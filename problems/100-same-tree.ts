// Problem Title: Same Tree
// Problem URL: https://leetcode.com/problems/same-tree/

// Problem Statement:
// Given the roots of two binary trees p and q, write a function to check if they are the same or not.
// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

// Example 1:
// Input: p = [1,2,3], q = [1,2,3]
//   1      1
//  / \    / \
// 2   3  2   3
// Output: true

// Example 2:
// Input: p = [1,2], q = [1,null,2]
//   1    1
//  /      \
// 2        2
// Output: false

// Example 3:
// Input: p = [1,2,1], q = [1,1,2]
//  1      1
// / \    / \
// 2  1  1   2
// Output: false

// Pattern:
// Recursion

// Solution:
// We can use recursion to check if the trees are the same.
// If both trees are null, we return true.
// If one of the trees is null, we return false.
// If the values of the nodes are not equal, we return false.
// We then recursively check the left and right subtrees.
// If both subtrees are the same, we return true.
// Otherwise, we return false.
// We continue this process until we reach the leaves of the trees.
// If we reach the leaves of both trees and they are the same, we return true.
// Otherwise, we return false.
// This is the most optimal solution.

// Big O Notation:
// Time complexity: O(n) - where n is the number of nodes in the tree.
// Space complexity: O(n) - where n is the number of nodes in the tree.

(() => {
  function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // If both trees are null, they are the same
    if (!p && !q) return true;

    // If one tree is null and the other isn't, they are not the same
    if (!p || !q) return false;

    // If the values of the current nodes are different, the trees are not the same
    if (p.val !== q.val) return false;

    // Recursively check if the left subtrees and right subtrees are the same
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }

  const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));

  console.log("Are these trees identical? [1,2,3], [1,2,3]", isSameTree(p, q));
})();
