// Problem Title: Binary Tree Inorder Traversal
// Problem URL: https://leetcode.com/problems/binary-tree-inorder-traversal/

// Problem Statement:
// Given the root of a binary tree, return the inorder traversal of its nodes' values.
// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100
// Follow up: Recursive solution is trivial, could you do it iteratively?

// Example 1:
// Input: root = [1,null,2,3]
//   1
//    \
//     2
//    /
//   3
// Output: [1,3,2]

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
//      1
//    /   \
//   2      3
//  / \      \
// 4   5      8
//    / \    /
//   6   7  9
// Output: [4,2,6,5,7,1,3,9,8]

// Pattern:
// Iterative Traversal

// Solution:
// We can use an iterative approach to traverse the tree in an inorder fashion.
// We use a stack to keep track of the nodes we have visited.
// We start at the root and traverse to the leftmost node, pushing each node onto the stack.
// Once we reach the leftmost node, we pop it off the stack and add it to the result array.
// We then move to the right child of the popped node and repeat the process.
// We continue this process until the stack is empty and all nodes have been visited.

// Big O Notation:
// Time complexity: O(n) - where n is the number of nodes in the tree.
// Space complexity: O(n) - where n is the number of nodes in the tree.

// Justification:
// The time complexity is O(n) because we visit each node once.
// The space complexity is O(n) because the stack can hold up to n nodes in the worst case.
// This is the most optimal solution.
// This is an accepted solution on LeetCode for the Binary Tree Inorder Traversal problem.
// The provided solution implements an iterative approach using a stack,
// which is one of the recommended methods for solving this problem.
// It correctly performs an inorder traversal of the binary tree,
// visiting the left subtree, then the root, and finally the right subtree for each node.
// The time and space complexity are both O(n), which is optimal for this problem.

// Order traversal (also known as level-order traversal):
// - Visits nodes level by level, from left to right.
// - Uses a queue data structure.
// - Visits the root, then all nodes at depth 1, then all nodes at depth 2, and so on.
// - Example: For the tree in Example 2, the order traversal would be [1,2,3,4,5,8,6,7,9].

// Inorder traversal (depth-first traversal)
// - Visits the left subtree, then the root, then the right subtree.
// - Can be implemented using recursion or an iterative approach with a stack.
// - For binary search trees, inorder traversal gives nodes in ascending order.
// - Example: For the tree in Example 2, the inorder traversal is [4,2,6,5,7,1,3,9,8].

// The main difference is the order in which nodes are visited:
// - Order traversal prioritizes breadth (level by level).
// - Inorder traversal prioritizes depth (left subtree before root before right subtree).

(() => {
  function inorderTraversal(root: TreeNode | null): number[] {
    const result: number[] = [];
    const stack: TreeNode[] = [];
    let current = root;

    // Iterate while visiting a node (ie current is set)
    // or while visited nodes are still in the stack.
    while (current || stack.length) {
      // Immediately dive into the deepest left node.
      // Save each node in a stack to backtrack later.
      // This terminates when the leftmost node is reached and current is assigned a `null` value.
      while (current) {
        stack.push(current);
        current = current.left;
      }

      // This will always have a value since the outer while loop confirms a stack length,
      // Or the stack length is increased during the inner while loop.
      current = stack.pop() as TreeNode;

      // This node is the leftmost unvisited node.
      result.push(current.val);

      // Move to the right child after all left nodes have been visited.
      current = current.right;
    }

    return result;
  }

  //      1
  //    /   \
  //   2      3
  //  / \      \
  // 4   5      8
  //    / \    /
  //   6   7  9
  const inputTree = new TreeNode(
    1,
    new TreeNode(
      2,
      new TreeNode(4),
      new TreeNode(5, new TreeNode(6), new TreeNode(7)),
    ),
    new TreeNode(3, null, new TreeNode(8, new TreeNode(9))),
  );

  console.log("94. Binary Tree Inorder Traversal", inputTree);
  console.log("94. Answer", inorderTraversal(inputTree));
})();
