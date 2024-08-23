// Problem Title: Kth Largest Element in an Array.
// Problem URL: https://leetcode.com/problems/kth-largest-element-in-an-array/
//
// Problem:
// Given an integer array nums and an integer k, return the kth largest element in the array.
// Note that it is the kth largest element in the sorted order, not the kth distinct element.
// Can you solve it without sorting?

// Solution:
// We can use a modified version of the QuickSelect algorithm to find the kth largest element in an array.

const findKthLargest = (nums: number[], k: number): number => {
  // QuickSelect function to find the kth largest element
  const quickSelect = (left: number, right: number, k: number): number => {
    // Base case: if left and right are the same, we've found our element
    if (left === right) {
      return nums[left];
    }

    // Choose a random pivot index
    let pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    // Partition the array around the pivot
    pivotIndex = partition(left, right, pivotIndex);

    // If k is at the pivot index, we've found our element
    if (k === pivotIndex) {
      return nums[k];
      // If k is less than pivot index, search left side
    } else if (k < pivotIndex) {
      return quickSelect(left, pivotIndex - 1, k);
      // If k is greater than pivot index, search right side
    } else {
      return quickSelect(pivotIndex + 1, right, k);
    }
  };

  // Partition function to rearrange elements around a pivot
  const partition = (
    left: number,
    right: number,
    pivotIndex: number,
  ): number => {
    const pivot = nums[pivotIndex];
    let storeIndex = left;

    // Move pivot to end
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];

    // Move all elements larger than pivot to the left side
    for (let i = left; i <= right; i++) {
      if (nums[i] > pivot) {
        [nums[i], nums[storeIndex]] = [nums[storeIndex], nums[i]];
        storeIndex++;
      }
    }

    // Move pivot to its final position
    [nums[storeIndex], nums[right]] = [nums[right], nums[storeIndex]];

    return storeIndex;
  };

  // Start QuickSelect with initial left and right bounds, and k-1 as index
  return quickSelect(0, nums.length - 1, k - 1);
};

// Time complexity: O(n) in the average case, O(n^2) in the worst case
// Space complexity: O(1) since we're doing everything in-place

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2)); // Answer: 5
