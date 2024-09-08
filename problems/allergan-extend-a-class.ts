// Problem Statement:
// Assume there is an Iterator interface that has a method `next()` that returns either { "value": <v> } when there is a value or { "done": true } when there are no more items.
// Implement a subclass that extends this Iterator class and implements a `hasNext()` function that returns a boolen.

// Solution:
// The trick is to override the `next()` superclass method and also maintain some internal state in the subclass.
// This allows calling functions to call `hasNext()` repeatedly without advancing the Iterator value over and over.
// We want to decouple advancing the iterator from ascertaining the next value (and using it for hasNext()).
// Remember, subclasses can access superclass _public_ methods and properties OR _override_ them.

(() => {
  type IteratorValue = {
    value: number;
  };

  type Completed = {
    done: true;
  };

  class Iterator {
    // The values are finite in this example, but in a real-world scenario, this could be an infinite stream.
    // Make sure that the extended class can handle this case.
    private values: number[] = [
      // 4, 2, 5, 7, 3, 9, 1, 8, 6, 0, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
      1, 2, 3,
    ];
    private index = 0;

    next(): IteratorValue | Completed {
      if (this.index === this.values.length - 1) {
        return { done: true };
      }

      this.index++;

      return {
        value: this.values[this.index],
      };
    }
  }

  class ExtendedIterator extends Iterator {
    // Maintain an internal state of the next iteration value.
    private nextValue: any = null;

    next(): IteratorValue | Completed {
      // Check if `nextValue` is set.
      // If it is, that means we've already called the `super.next()` method once beofre and setting `nextValue` to `null` will mean this class and the superclass are in sync.
      if (this.nextValue) {
        const nextValue = this.nextValue;

        this.nextValue = null;

        return nextValue;
      } else {
        // No saved internal state for the next iterator value.
        // Call the superclass `next()` method to get it; note: this advances the superclass index.
        return super.next();
      }
    }

    hasNext() {
      // If the next value hasn't been pulled/saved yet, call the base class iterator's `next()` method.
      // Make sure to save it to internal state.
      if (!this.nextValue) {
        this.nextValue = super.next(); // Remember: This advances the superclass index.
      }

      // When the next value is available to read from internal state, check if it's a Completed value, which means that there is no next value.
      // Otherwise, there truly is a valid next value.
      if (this.nextValue?.done) {
        return false;
      } else {
        return true;
      }
    }
  }

  const myExtendedIterator = new ExtendedIterator();

  console.log("Has next value:", myExtendedIterator.hasNext()); // true
  console.log("Has next value:", myExtendedIterator.hasNext()); // true
  console.log("Next value:", myExtendedIterator.next()); // { value: 2 }
  console.log("Has next value:", myExtendedIterator.hasNext()); // true
  console.log("Next value:", myExtendedIterator.next()); // { value: 3 }
  console.log("Has next value:", myExtendedIterator.hasNext()); // false
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
  console.log("Has next value:", myExtendedIterator.hasNext()); // false
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
  console.log("Next value:", myExtendedIterator.next()); // { done: true }
})();
