import { reduceRight } from '../reduceRight';

describe('Core.reduceRight', () => {
  const add = (x, y) => x + y;
  const mult = (x, y) => x * y;
  const append = (arr, e) => arr.concat(e);

  test('folds simple fns over arrays with the supplied accumulator', () => {
    expect(reduceRight(add, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduceRight(mult, 1, [1, 2, 3, 4])).toBe(24);
    expect(reduceRight(append, [], [1, 2, 3, 4])).toEqual([4, 3, 2, 1]);
  });

  test('returns the accumulator for an empty array', () => {
    expect(reduceRight(add, 0, [])).toBe(0);
    expect(reduceRight(mult, 1, [])).toBe(1);
  });
});
