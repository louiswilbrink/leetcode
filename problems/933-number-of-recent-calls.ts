// Problem Title: Number of Recent Calls
// Problem URL: https://leetcode.com/problems/number-of-recent-calls
//
// Problem Statement:
// You have a `RecentCounter` class which counts the number of recent requests within a certain time frame.
// Implement the `RecentCounter` class:
//   - `RecentCounter()` Initializes the counter with zero recent requests.
//   - `int ping(int t)` Adds a new request at time `t`, where `t` represents some time in milliseconds, and returns the number of requests that has happened in the past `3000` milliseconds (including the new request). Specifically, return the number of requests that have occurred in the inclusive range `[t - 3000, t]`.
// It is *guaranteed* that every call to `ping` uses a strictly larger value of `t` than the previous call.

// Solution:
// We can solve this problem by using a queue to store the requests.
// When a new request comes in, we will add it to the queue.
// We will then iterate over the queue and remove any requests that are older than 3000 milliseconds.
// Finally, we will return the length of the queue, which represents the number of requests that have occurred in the past 3000 milliseconds.

// A queue is ideal for this problem because:
// 1. It follows the First-In-First-Out (FIFO) principle, which matches the time-based nature of the requests.
//    Note: We can add elements using the `push` method and remove elements from the front of the queue (index 0) using the `shift` method.
//    SimpleJack Note: In JavaScript queues are just arrays that use `push` and `shift` methods.
// 2. We only need to check and remove elements from the front of the queue (oldest requests).
// 3. Adding new requests is efficient (O(1)) as we just append to the end of the queue.
// 4. It naturally maintains the order of requests based on their timestamps.
// 5. We can easily get the count of recent requests by checking the queue's length.

class RecentCounter {
  private requests: number[] = [];

  constructor() {}

  ping(t: number): number {
    // Add the new request time to the queue.
    this.requests.push(t);

    // Repeatedly check the oldest requests (fount at index 0), and remove them if they are older than 3000 milliseconds.
    while (this.requests.length > 0 && this.requests[0] < t - 3000) {
      this.requests.shift();
    }

    // Return the number of requests that have occurred in the past 3000 milliseconds (no individual request details required).
    return this.requests.length;
  }
}

const recentCounter = new RecentCounter();

recentCounter.ping(1);
recentCounter.ping(100);
recentCounter.ping(3001);
recentCounter.ping(3002);
recentCounter.ping(3003);
recentCounter.ping(4000);
console.log(recentCounter.ping(6003)); // 3
