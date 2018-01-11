import comparator from '../comparator';

describe('Core.comparator', () => {
  test('builds a comparator function for sorting out of a simple predicate that reports whether the first param is smaller', () => {
    const compOne = comparator((a, b) => a < b);
    const compTwo = comparator((a, b) => a > b);

    expect([3, 1, 8, 1, 2, 5].sort(compOne)).toEqual([1, 1, 2, 3, 5, 8]);
    expect([3, 1, 8, 1, 2, 5].sort(compTwo)).toEqual([8, 5, 3, 2, 1, 1]);
  });
});
