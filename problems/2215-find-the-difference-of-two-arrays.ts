// Problem Title: Find the difference of two arrays
// Problem URL: https://leetcode.com/problems/find-the-difference-of-two-arrays

// Problem Statement:
// Given two *0-indexed* integer arrays `nums1` and `nums2`, return a list `answer` of size 2 where:
//   - `answer[0]` is a list of all *distinct* integers in `nums1` which are *not* present in `nums2`.
//   - `answer[1]` is a list of all *distinct* integers in `nums2` which are *not* present in `nums1`.
// *Note* that the integers in the lists may be returned in *any* order.

// Solution:
// We can solve this problem by using a hash set to store the elements of the first array.
// We will then iterate over the second array and check if the element is present in the hash set.
// If the element is not present, we will add it to the answer list.
// We will repeat the process for the second array, iterating over the first array and checking whether each element is present in the second array.

// Big0 Notation:
// The time complexity of this solution is O(n + m), where n is the length of the first array and m is the length of the second array.
// The space complexity is O(n), where n is the length of the first array.

// Function to find the difference between two arrays
function findDifference(nums1: number[], nums2: number[]): number[][] {
  // Create a Set from nums1 for efficient lookup (0(n) time/space).
  const set = new Set<number>(nums1);

  // Initialize the answer array with two empty arrays
  const answer: number[][] = [[], []];

  // Iterate through nums2
  for (const num of nums2) {
    // If the number is not in set (nums1), add it to answer[1]
    if (!set.has(num)) {
      answer[1].push(num);
    }
  }

  // Iterate through nums1
  for (const num of nums1) {
    // If the number is not in nums2 (checked using set), add it to answer[0]
    if (!nums2.includes(num)) {
      answer[0].push(num);
    }
  }

  return answer;
}

const input = [
  [1, 2, 3],
  [2, 5, 6],
];

const output = findDifference(input[0], input[1]);

console.log(output); // [[1, 3], [5, 6]]
