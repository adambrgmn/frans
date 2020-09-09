import { complement } from '../complement';

describe('Core.complement', () => {
  test('accepts a boolean returning function and reverses its otput', () => {
    const isNil = (x) => x == null;
    const isNotNil = complement(isNil);

    expect(isNotNil(null)).not.toBe(isNil(null));
  });

  test('creates boolean-returning function that reverses another', () => {
    const even = (x) => x % 2 === 0;
    const f = complement(even);

    expect(f(8)).toBeFalsy();
    expect(f(13)).toBeTruthy();
  });

  test('accepts a function that take multiple parameters', () => {
    const between = (a, b, c) => a < b && b < c;
    const f = complement(between);

    expect(f(4, 5, 11)).toBeFalsy();
    expect(f(12, 2, 6)).toBeTruthy();
  });
});
