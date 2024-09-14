// Problem Title: Guess Number Higher or Lower
// Problem URL: https://leetcode.com/problems/guess-number-higher-or-lower/

// Problem Statement:
// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.
// You call a pre-defined API int guess(int num), which returns 3 possible results:
// -1: The number I picked is lower than your guess (i.e. pick < num).
// 1: The number I picked is higher than your guess (i.e. pick > num).
// 0: The number I picked is equal to your guess (i.e. pick == num).
// Return the number that I picked.

// Example 1:
// Input: n = 10, pick = 6
// Output: 6

// Example 2:
// Input: n = 1, pick = 1
// Output: 1

// Example 3:
// Input: n = 2, pick = 1
// Output: 1

// Pattern:
// Binary Search

// Solution:
// We can use binary search to find the number.
// We set the left and right pointers to 1 and n, respectively.
// We then calculate the middle number.
// We call the guess function with the middle number.
// If the guess is -1, we set the right pointer to mid - 1.
// If the guess is 1, we set the left pointer to mid + 1.
// If the guess is 0, we return the middle number.
// We continue this process until the left pointer is greater than the right pointer.
// This is because the left pointer will eventually be the number we are looking for.

// Justification:
// We can use binary search to find the number because the numbers are sorted.
// This will allow us to eliminate half of the numbers each time we make a guess.
// This will reduce the time complexity to O(log n).
// The space complexity is O(1) because we are not using any additional space.
// This is the most optimal solution.
// The time complexity is O(log n) because we are dividing the search space in half each time we make a guess.

// Time Complexity: O(log n) - We are dividing the search space in half each time we make a guess.
// Space Complexity: O(1) - We are not using any additional space.

(() => {
  function guess(num: number) {
    return {
      0: -1,
      1: -1,
      2: -1,
      3: 0,
      4: 1,
      5: 1,
      6: 1,
      7: 1,
      8: 1,
      9: 1,
      10: 1,
    }[num];
  }

  function guessNumber(n: number) {
    // Set pointers at the beginning and end of the guess range.
    let left = 0;
    let right = n - 1;

    while (left < right) {
      // Execute binary search between left and right pointers.
      const mid = Math.ceil((right - left) / 2);

      // Guess the middle number in the guess range.
      const guessResult = guess(mid);

      // Guess too low, bring in left pointer.
      if (guessResult === -1) {
        left = mid;
        continue;
      }

      // Guess too high, bring in right pointer.
      if (guessResult === 1) {
        right = mid;
        continue;
      }

      // Found it!
      if (guessResult === 0) {
        return mid;
      }
    }

    // This return statement is needed because if the while loop completes without finding an exact match,
    // the 'left' pointer will be at the closest number to our target. This happens when 'left' and 'right'
    // converge to the same value, which is the best guess based on the binary search algorithm.
    return left;
  }

  function guessNumberCopilot(n: number) {
    let left = 1;
    let right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      const guessResult = guess(mid);

      if (guessResult === -1) {
        right = mid;
      } else if (guessResult === 1) {
        left = mid + 1;
      } else {
        return mid;
      }
    }

    return left;
  }

  console.log("Guess a number from 1-10 (psst, it's 3):", guessNumber(10));
})();
