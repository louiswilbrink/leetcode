// Problem Title: Longest Substring Without Repeating Characters
// Problem URL: https://leetcode.com/problems/longest-substring-without-repeating-characters/
//
// Problem:
// Given a string `s`, find the length of the longest substring without repeating characters.
//
// Solution:
// We can use a sliding window approach to solve this problem.
// We'll keep track of the characters we've seen so far in a set.

const lengthOfLongestSubstring = (s: string): number => {
  let longestLength = 0;
  const substring = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    // If you encounter a repeated character:
    // 1. Save the length of the substring if it exceeds the current value for longestLenghth.
    // 2. Restart the substring using the current character.
    if (substring.has(char)) {
      longestLength = Math.max(longestLength, substring.size);
      substring.clear();
      substring.add(char);
    } else {
      // Otherwise, continue building the substring since characters are not yet repeating.
      substring.add(char);
    }
  }

  // At this point, you'll have a value for longestLength, and the current substring.  Return whatever is longer.
  return Math.max(longestLength, substring.size);
};

// Time complexity: O(n) where n is the length of s
// Space complexity: O(min(n, m)) where n is the length of s and m is the size of the character set

console.log(lengthOfLongestSubstring("catdd")); // Answer: 4
// console.log(lengthOfLongestSubstring("skkejldkk")); // Answer: 6
// console.log(lengthOfLongestSubstring("skejldkgh")); // Answer: 9
// console.log(lengthOfLongestSubstring("aa")); // Answer: 1
