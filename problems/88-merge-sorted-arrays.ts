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
  // Create three pointers:
  //   - One pointer for each array so that we can compare values.
  //   - One pointer in nums1 that tracks which element to replace.
  let p1 = m - 1;
  let p2 = n - 1;
  let p = m + n - 1; // Remember: indexes beyond the length of an array can still be accessed and will have a value of 0.

  // Continue until we've processed all elements in nums2
  //
  // We use a while loop here because:
  // 1. We need to continue the process until we've merged all elements from nums2 into nums1
  // 2. The number of iterations is not known beforehand, it depends on the content of the arrays
  // 3. We need to be able to adjust multiple pointers in each iteration
  // 4. The loop allows us to compare elements and make decisions in each iteration
  // 5. It provides flexibility to handle cases where one array might be exhausted before the other
  while (p2 >= 0) {
    // Check if nums1 pointer value is greater than nums2 pointer value.
    // Also make sure that nums1 pointer hasn't fallen below 0.  If it has fallen below 0, then there are no more elements in nums1 and all subsequent iterations will use nums2's remaining values.
    if (p1 >= 0 && nums1[p1] > nums2[p2]) {
      nums1[p] = nums1[p1]; // Assign the replacement pointer element's value to nums1's pointer value.
      p1--; // Move nums1's pointer back
    } else {
      nums1[p] = nums2[p2]; // Assign the replacement pointer element's value to nums2's pointer value.
      p2--; // Move nums2's pointer back
    }
    p--; // Since, each iteration results in assigning a value at nums1[p], move the replacement pointer back one to set up for the next iteration.
  }
}

const nums1 = [1, 2, 3];

merge(nums1, 3, [2, 5, 6], 3); // [1, 2, 2, 3, 5, 6]

console.log(nums1);
