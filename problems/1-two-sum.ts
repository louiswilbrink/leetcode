// Problem Title: Two Sum
// Problem URL: https://leetcode.com/problems/two-sum/

// Problem:
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution (me: this means you can bomb out early from loops),
// and you may not use the same element twice.
// You can return the answer in any order.

// Solution:
// Use a hash map to store complements and their indices.
// Iterate through the array, checking if the complement exists.
// If found, return the indices immediately (problem only asks for "exactly one solution").
// If not, add the current number to the map.

type Params = {
  nums: number[];
  target: number;
};

function twoSum({ nums, target }: Params): number[] {
  // Set up space to memoize the numbers and their indices.
  const numMap = new Map<number, number>();

  // Loop and seek for complementary pairs (numbers that add up to the target).
  for (let i = 0; i < nums.length; i++) {
    // Calculate the complement (the number needed to reach the target)
    const complement = target - nums[i];

    // Check if the complement exists in our map.
    if (numMap.has(complement)) {
      // If it does, we've found our pair. Return their indices.
      return [numMap.get(complement) as number, i];
    }

    // Otherwise, add the current number and its index to the map.
    numMap.set(nums[i], i);
  }

  return []; // Handles empty `nums` arrays or if no complements were found.
}

// Time complexity: O(n) where n is the length of nums
// Space complexity: O(n) in the worst case, where we might need to store all elements in the map

console.log(twoSum({ nums: [3, 5, 2, 4], target: 9 })); // [1, 3]
