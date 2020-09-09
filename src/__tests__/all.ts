import { all } from '../all';

describe('Core.all', () => {
  const even = (n: number) => n % 2 === 0;
  const T = () => true;
  const isFalse = (x: boolean) => x === false;

  test('returns true if all elements satisfy the predicate', () => {
    expect(all(even, [2, 4, 6, 8, 10, 12])).toBeTruthy();
    expect(all(isFalse, [false, false, false])).toBeTruthy();
  });

  test('returns false if any element fails to satisfy the predicate', () => {
    expect(all(even, [2, 4, 6, 8, 9, 10])).toBeFalsy();
  });

  test('returns true for an empty list', () => {
    expect(all(T, [])).toBeTruthy();
  });

  test('works with more complex objects', () => {
    const len3 = (o: any) => o.x.length === 3;
    const hasA = (o: any) => o.x.indexOf('a') > -1;
    const xs = [{ x: 'abc' }, { x: 'ade' }, { x: 'fghiajk' }];

    expect(all(len3, xs)).toBeFalsy();
    expect(all(hasA, xs)).toBeTruthy();
  });
});
