// Problem Title: Merge Sorted Arrays
// Problem URL: https://leetcode.com/problems/merge-sorted-array

// Problem Statement:
// You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1.
// To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored.
// nums2 has a length of n.

// Solution:
// We can solve this problem by using two pointers.
// We will start from the end of both arrays and compare the elements at the pointers.
// We will then place the larger element at the end of the first array and decrement the pointer of the array from which the element was taken. We will continue this process until we have merged all the elements of the second array into the first array.

function merge(nums1: number[], m: number, nums2: number[], n: number) {
  // Initialize pointers
  let p1 = m - 1; // Pointer for the end of nums1's original elements
  let p2 = n - 1; // Pointer for the end of nums2
  let p = m + n - 1; // Pointer for the end of nums1 (including space for nums2)

  // Continue until we've processed all elements in nums2
  while (p2 >= 0) {
    // If nums1 still has elements and its current element is greater than nums2's current element
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]; // Place nums1's element at the current position
      p1--; // Move nums1's pointer back
    } else {
      nums1[p] = nums2[p2]; // Place nums2's element at the current position
      p2--; // Move nums2's pointer back
    }
    p--; // Move the placement pointer back
  }
}

function practiceMerge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number,
) {}

const nums1 = [1, 2, 3];

merge(nums1, 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]

console.log(nums1);
