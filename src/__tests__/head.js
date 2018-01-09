import { head } from '../';

describe('Core.head', () => {
  test('returns the first element of an array', () => {
    expect(head([1, 2, 3])).toBe(1);
    expect(head([2, 3])).toBe(2);
    expect(head([3])).toBe(3);
    expect(head([])).toBe(undefined);
  });

  test('returns the first element of a string', () => {
    expect(head('abc')).toBe('a');
    expect(head('bc')).toBe('b');
    expect(head('c')).toBe('c');
    expect(head('')).toBe('');
  });

  test('throws if applied to null or undefined', () => {
    expect(() => head(null)).toThrow(TypeError);
    expect(() => head(undefined)).toThrow(TypeError);
  });
});
