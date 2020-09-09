import { range } from '../range';

describe('Core.range', () => {
  test('returns list of numbers', () => {
    expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
    expect(range(4, 7)).toEqual([4, 5, 6]);
  });

  test('returns the empty list if the first parameter is not larger than the second', () => {
    expect(range(7, 3)).toEqual([]);
    expect(range(5, 5)).toEqual([]);
  });

  test('terminates given bad input', () => {
    expect(() => range('a', 'z')).toThrow(TypeError);
  });
});
