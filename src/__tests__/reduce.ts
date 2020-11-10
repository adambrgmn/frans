import { reduce } from '../reduce';

describe('Core.reduce', () => {
  const add = (x: number, y: number) => x + y;
  const mult = (x: number, y: number) => x * y;
  const concat = <T>(arr: T[], e: T) => arr.concat(e);

  test('folds simple fns over arrays with the supplied accumulator', () => {
    expect(reduce(add, 0, [1, 2, 3, 4])).toBe(10);
    expect(reduce(mult, 1, [1, 2, 3, 4])).toBe(24);

    expect(reduce<number>(concat, [], [1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });

  test('returns the accumulator for an empty array', () => {
    expect(reduce(add, 0, [])).toBe(0);
    expect(reduce(mult, 1, [])).toBe(1);
  });
});
