import { reduce } from '../';

describe('Core.reduce', () => {
  const add = (x, y) => x + y;
  const mult = (x, y) => x * y;

  test('folds simple fns over arrays with the supplied accumulator', () => {
    expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduce(mult, 1, [1, 2, 3, 4])).toBe(24);
  });

  test('returns the accumulator for an empty array', () => {
    expect(reduce(add, 0, [])).toBe(0);
    expect(reduce(mult, 1, [])).toBe(1);
  });
});
