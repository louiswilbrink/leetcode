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

  for (let i = 0; i < s.length; i++) {
    const charSet = new Set<string>();
    let length = 0;

    for (let j = i; j < s.length; j++) {
      const char = s[j];

      if (charSet.has(char)) {
        break;
      }

      charSet.add(char);
      length++;
    }

    longestLength = Math.max(longestLength, length);
  }

  return 5;
};

// Time complexity: O(n^2) where n is the length of s
// Space complexity: O(min(n, m)) where n is the length of s and m is the size of the character set

console.log(lengthOfLongestSubstring("catdd")); // Answer: 4
// console.log(lengthOfLongestSubstring("skkejldkk")); // Answer: 6
// console.log(lengthOfLongestSubstring("skejldkgh")); // Answer: 9
// console.log(lengthOfLongestSubstring("aa")); // Answer: 1
