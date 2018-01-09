import { findIndex } from '../';

describe('Core.findIndex', () => {
  const obj1 = { x: 100 };
  const obj2 = { x: 200 };
  const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  const even = x => x % 2 === 0;
  const gt100 = x => x > 100;
  const isStr = x => typeof x === 'string';
  const xGt100 = o => o && o.x > 100;

  test('returns the first element that satisfies the predicate', () => {
    expect(findIndex(even, a)).toBe(1);
    expect(findIndex(gt100, a)).toBe(8);
    expect(findIndex(isStr, a)).toBe(3);
    expect(findIndex(xGt100, a)).toBe(10);
  });

  test('returns `undefined` when no element satisfies the predicate', () => {
    expect(findIndex(even, ['zing'])).toBe(-1);
  });

  test('returns `undefined` when given an empty list', () => {
    expect(findIndex(even, [])).toBe(-1);
  });
});
