# Solution Strategies

These are common patterns (or algorithms) that are useful for solving LeetCode problems.

Remember, almost all solutions will require some processing (loop or recursion) and memoization.  This is why Big O notation is used to describe your solution; it describes how the time & space complexity of your solution grows as the input size grows.

## Pointers

Good for iterating over two arrays and comparing elements.

Problems:
`88-merge-sorted-arrays`

## Sliding Window

Coming soon...

LeetCode Problems:
`3-longest-string-without-repeating-characters`

## Recursion

Good for binary tree problems.

Useful for problems where you can break the problem down into smaller subproblems.


LeetCode Problems:
`108-convert-sorted-array-to-binary-search-tree.ts`

## Quick Select

Coming soon...

LeetCode Problems:
`215-kth-largest-element-in-an-array`

## Queues

Good when you want to remember things in order and process them FIFO (First In, First Out).

Implementation: Create and array and use push and shift OR use a linked list

## Stacks

Good when you need to remember things in order and process them in reverse order.

LeetCode Problems:
`394-decode-string`

## Call Stack Counter:

Good when the answer is tied to the number of recursive calls made.

## Prefix Sum (Or Cumulative Sum):

Technique: create a `sums` array where the value at each index is the sum of all elements in the input array up to that index.

Ex: input array [1,3,5,7,9] -> sums array [1,4,9,16,25]

Good when it helps to know the sum at each index, aiding in achieving 0(1) time complexity.

LeetCode Problems:
`560-subarray-sum-equals-k`
