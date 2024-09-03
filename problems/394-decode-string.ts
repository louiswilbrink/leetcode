// Problem Title: Decode String
// Problem URL: https://leetcode.com/problems/decode-string
//
// Problem Statement:
// Given an encoded string, return its decoded string.
// The encoding rule is: `k[encoded_string]`, where the `encoded_string` inside the square brackets is being repeated exactly `k` times. Note that `k` is guaranteed to be a positive integer.
// You may assume that the input string is always valid; no extra white spaces, square brackets are well-formed, etc.
// Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, `k`. For example, there won't be input like `3a` or `2[4]`.
// The test cases are generated so that the length of the output will never exceed 10^5.

// Examples:
// Input: s = "3[a]2[bc]"
// Output: "aaabcbc"
//
// Input: s = "3[a2[c]]"
// Output: "accaccacc"
//
// Input: s = "2[abc]3[cd]ef"
// Output: "abcabccdcdcdef"

// Solution:
// We can solve this problem using a stack to keep track of the current string and the number of times it should be repeated.
// We will iterate over the input string and process each character based on the following rules:
// 1. If the character is a digit, we will update the current number of times the string should be repeated.
// 2. If the character is an opening square bracket `[`, we will push the current number of times and the current string onto the stack and reset them.
// 3. If the character is a closing square bracket `]`, we will pop the number of times and the string from the stack, repeat the current string that many times, and append it to the previous string.
// 4. If the character is a letter, we will append it to the current string.
// 5. At the end of the iteration, the stack will contain the decoded string.
// 6. We will join the strings in the stack to get the final decoded string.

function decodeString(encodedString: string): string {
  const stack: (string | number)[] = [];
  let currentString = "";
  let currentNumber = 0;

  // Iterate through each character in the encoded string
  // There are rules to process if the character is a digit, opening bracket, closing bracket, or a letter.
  for (const char of encodedString) {
    if (char >= "0" && char <= "9") {
      // If the character is a digit, update the current number
      currentNumber = currentNumber * 10 + parseInt(char);
    } else if (char === "[") {
      // If it's an opening bracket, push the current number and string to the stack
      stack.push(currentNumber);
      stack.push(currentString);
      // Reset the current number and string
      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      // If it's a closing bracket, pop the previous string and number from the stack
      const prevString = stack.pop() as string;
      const repeatTimes = stack.pop() as number;
      // Repeat the current string and append it to the previous string
      currentString = prevString + currentString.repeat(repeatTimes);
    } else {
      // If it's a letter, append it to the current string
      currentString += char;
    }
  }

  // Return the final decoded string
  return currentString;
}

console.log(decodeString("3[a]2[bc]")); // "aaabcbc"
console.log(decodeString("3[a4[x]]2[bc]")); // "axxxxaxxxxaxxxxbcbc"
