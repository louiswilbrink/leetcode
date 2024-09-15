// Problem Title: Binary Tree Level Order Traversal
// Problem URL: https://leetcode.com/problems/binary-tree-level-order-traversal/

// Problem Statement:
// Given the root of a binary tree, return the level order traversal of its nodes' values.
// (i.e., from left to right, level by level).

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
//   3
//  / \
// 9  20
//   /  \
//  15   7
// Output: [[3],[9,20],[15,7]]

// Example 2:
// Input: root = [1]
// Output: [[1]]

// Example 3:
// Input: root = []
// Output: []

// Pattern:
// BFS

// Solution:
// We can use a queue to perform a breadth-first search (BFS) traversal of the tree.
// We start by pushing the root node into the queue.
// While the queue is not empty, we dequeue a node, add its value to the current level array,
// and enqueue its left and right children if they exist.
// Once we finish processing all nodes at the current level, we add the current level array to the result array.
// We continue this process until the queue is empty, and all nodes have been visited.
// The result array will contain the level order traversal of the binary tree.
// This approach ensures that nodes at the same level are visited together, from left to right.

// Big O Notation:
// Time complexity: O(n) - where n is the number of nodes in the tree.
// Space complexity: O(n) - where n is the number of nodes in the tree.

// Justification:
// The time complexity is O(n) because we visit each node once.
// The space complexity is O(n) because the queue can hold up to n nodes in the worst case.
// This is an accepted solution on LeetCode for the Binary Tree Level Order Traversal problem.

(() => {
  function levelOrderTraversal(root: TreeNode | null) {
    // If the root is null, return an empty array
    if (!root) return [];

    // Initialize the result array to store level-order traversal
    const result = [];

    // Initialize a queue with the root node
    const queue = [root];

    // Continue processing while there are nodes in the queue
    while (queue.length) {
      // Get the number of nodes at the current level
      const levelSize = queue.length;

      // Initialize an array to store values of nodes at the current level
      const currentLevel = [];

      // Process all nodes at the current level
      for (let i = 0; i < levelSize; i++) {
        // Remove the first node from the queue
        const node = queue.shift() as TreeNode;

        // Add the node's value to the current level array
        currentLevel.push(node.val);

        // If the node has a left child, add it to the queue
        if (node.left) queue.push(node.left);

        // If the node has a right child, add it to the queue
        if (node.right) queue.push(node.right);
      }

      // Add the current level array to the result
      result.push(currentLevel);
    }

    // Return the level-order traversal result
    return result;
  }

  const inputTree = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7)),
  );

  console.log("102. Binary Tree Level Order Traversal", inputTree);
  console.log("Answer: ", levelOrderTraversal(inputTree));
})();
