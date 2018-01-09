import { last } from '../';

describe('Core.last', () => {
  test('returns the first element of an array', () => {
    expect(last([1, 2, 3])).toBe(3);
    expect(last([2, 3])).toBe(3);
    expect(last([3])).toBe(3);
    expect(last([])).toBe(undefined);
  });

  test('returns the first element of a string', () => {
    expect(last('abc')).toBe('c');
    expect(last('bc')).toBe('c');
    expect(last('c')).toBe('c');
    expect(last('')).toBe('');
  });

  test('throws if applied to null or undefined', () => {
    expect(() => last(null)).toThrow(TypeError);
    expect(() => last(undefined)).toThrow(TypeError);
  });
});
