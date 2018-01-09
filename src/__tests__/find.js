import { find } from '../';

describe('Core.find', () => {
  const obj1 = { x: 100 };
  const obj2 = { x: 200 };
  const a = [11, 10, 9, 'cow', obj1, 8, 7, 100, 200, 300, obj2, 4, 3, 2, 1, 0];
  const even = x => x % 2 === 0;
  const gt100 = x => x > 100;
  const isStr = x => typeof x === 'string';
  const xGt100 = o => o && o.x > 100;

  it('returns the first element that satisfies the predicate', () => {
    expect(find(even, a)).toBe(10);
    expect(find(gt100, a)).toBe(200);
    expect(find(isStr, a)).toBe('cow');
    expect(find(xGt100, a)).toBe(obj2);
  });

  it('returns `undefined` when no element satisfies the predicate', () => {
    expect(find(even, ['zing'])).toBe(undefined);
  });

  it('returns `undefined` when given an empty list', () => {
    expect(find(even, [])).toBe(undefined);
  });
});
