// Problem Title: Subarray Sum Equals K
// Problem URL: https://leetcode.com/problems/subarray-sum-equals-k/

// Problem Statement:
// Given an array of integers nums and an integer k,
// return the total number of continuous subarrays
// whose sum equals to k.

// Example 1:
// Input: nums = [1,1,1], k = 2
// Output: 2

// Example 2:
// Input: nums = [1,2,3], k = 3
// Output: 2

// Pattern:
// Prefix Sum + Hash Map

// Solution:
// The trick is to maintain a running sum of the numbers in the array (prefix sum or cumulative sum) and to use a hashmap to keep track of the number of times a sum has been seen.
// As you iterate through the array, you check if the current sum minus k has been seen before.
// If (sum - k) exists in the hashmap, it means there's a previous point where the difference between the current sum and that point's sum is exactly k.
// If (sum - k) exists in the hashmap, you add the frequency of that sum to the count.
// (this is why you need to keep track of the number of times a sum is seen - the frequency of that sum represents the number of subarrays that can be combined with the current element to form a subarray summing to k.)
//
// We maintain a running sum and use a hashmap to track sum frequencies. When we find (currentSum - k) in our map,
// the frequency of that sum represents how many previous subarrays can be combined with the current element to form a subarray summing to k.
// This approach allows us to count all valid subarrays in a single pass through the array, achieving O(n) time complexity.

// [0, 4, 6, 2, 4, 7, 3, 5, 12 (current index), ...] If this is the sums array, and the target is 8...
//     ^        ^
//     |--------|-------------- Then the difference between the current index and *either* index containing 4 will be 8.
//                              This results in two continuous subarrays that sum to the target, 8.
//                              Add these to the running count of subarrays summing to the given target.

// Big O Analysis:
// Time Complexity: O(n) - We iterate through the array once.
//                         By counting the number of times a sum appears, we don't have to go back and find other instances of the sum.
// Space Complexity: O(n) - The map can store up to n elements in the worst case.

// Justification:
// This is a classic problem that can be solved using a hashmap to keep track of the running sum and the number of times it has been seen.
// This solution is the accepted answer on LeetCode for the "Subarray Sum Equals K" problem.
// It passes all test cases and meets the time and space complexity requirements.
// The implementation uses an efficient approach with a hash map to solve the problem in O(n) time complexity.

(() => {
  function subarraySum(nums: number[], k: number): number {
    // Initialize count to keep track of subarrays with sum equal to k
    let count = 0;

    // Initialize sum to keep track of the running sum
    let sum = 0;

    // Create a map to store the cumulative sum and its frequency
    const map = new Map<number, number>();

    // Initialize the map with 0 sum occurring once (empty subarray)
    map.set(0, 1);

    for (let i = 0; i < nums.length; i++) {
      // Add current number to the running sum
      sum += nums[i];

      // Check if (sum - k) exists in the map
      // This is crucial because:
      // 1. 'sum' is the current cumulative sum
      // 2. 'k' is our target sum
      // 3. If (sum - k) exists in the hashmap, it means there's a previous point where
      //    the *difference* between the current sum and that point's sum is exactly k.
      //    We will have the starting index and ending index of the subarray that sums to k -- some i and the current index.
      if (map.has(sum - k)) {
        // If found, we've discovered one or more subarrays summing to k
        // We add the frequency of (sum - k) to our count, as each occurrence
        // represents a valid subarray ending at the current position
        count += map.get(sum - k)!;
      }

      // Update the frequency of the current sum in the map
      map.set(sum, (map.get(sum) || 0) + 1);
    }

    // Return the total count of subarrays with sum equal to k
    return count;
  }

  // Test cases
  const nums = [1, 2, 1];

  console.log(
    "Subarray sum (array: [1,2,1], target: 3):",
    subarraySum(nums, 3),
  );
})();
