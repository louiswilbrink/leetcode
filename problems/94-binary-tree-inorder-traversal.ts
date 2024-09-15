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

(() => {
  const inputTree = new TreeNode(
    1,
    null,
    new TreeNode(2, new TreeNode(3), null),
  );
  console.log("94. Binary Tree Inorder Traversal", inputTree);
})();
