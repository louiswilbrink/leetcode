// Problem Title: 3Sum
// Problem URL: https://leetcode.com/problems/3sum/

// Problem Statement:
// Given an integer array nums,
// return all the triplets [nums[i], nums[j], nums[k]]
// such that i != j, i != k, and j != k,
// and nums[i] + nums[j] + nums[k] == 0.
// Notice that the solution set must not contain duplicate triplets.

// Example 1:
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:
// Input: nums = []
// Output: []

// Example 3:
// Input: nums = [0]
// Output: []

// Solution:
// [Two Points Pattern]
// The trick is to first sort the array and iterate through it.
// For each number, we set two pointers, one at the _next_ index and the other at the _end_ of the array.
// (These three pointers, including the iterator, will form a triplet.)
// We then check if the sum of the three numbers is equal to 0.
// If the sum is less than 0, we increment the left pointer.
// If the sum is greater than 0, we decrement the right pointer.
// If the sum is equal to 0, we add the triplet to the result and increment the left pointer while decrementing the right pointer.
// We also skip duplicate numbers to avoid duplicate triplets.

// Big O Analysis:
// Time Complexity: O(n^2) - We iterate through the array once and for each element, we iterate through the rest of the array.
// Space Complexity: O(n) - We store the result in an array.

(() => {
  function threeSum(nums: number[]) {
    // Sort the array; this will give us a means to increase or decrease the running sum.
    nums.sort((a, b) => a - b);

    const result: number[][] = [];

    // Iterate through each number in the array.
    // We loop to nums.length - 2 because we need at least three numbers for a triplet.
    // The last two numbers will be handled by the left and right pointers.
    for (let i = 0; i < nums.length - 2; i++) {
      // Skip duplicate values at 'i' to avoid duplicate triplets.
      if (i > 0 && nums[i] === nums[i - 1]) continue;

      // Initialize the left pointer to the _next_ index.
      // We don't need to look at indicies prior to `i` because we will have already checked them.
      // In otherwords, i is always the first number in the triplet.
      let left = i + 1;
      let right = nums.length - 1; // Always set this pointer to the end of the array.

      // Iterate until the pointers cross each other.
      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        // We found a triplet!
        if (sum === 0) {
          result.push([nums[i], nums[left], nums[right]]);

          // Fast-forward the left pointer past any duplicate values.
          while (left < right && nums[left] === nums[left + 1]) left++;

          // Fast-forward the right pointer past any duplicate values.
          while (left < right && nums[right] === nums[right - 1]) right--;

          // Since a triplet is found, move *both* pointers towards the candidate number.
          left++;
          right--;
        } else if (sum < 0) {
          // Sum is too small, move the left pointer to increase the sum.
          left++;
        } else {
          // Sum is too large, move the right pointer to decrease the sum.
          right--;
        }
      }
    }

    return result;
  }

  const input = [-1, 0, 1, 2, -1, -4];

  console.log("Three sum:", threeSum(input));
})();
