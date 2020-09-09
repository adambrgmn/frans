import { concat } from '../concat';

describe('Core.concat', () => {
  test('adds combines the elements of the two lists', () => {
    expect(concat(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    expect(concat([], ['c', 'd'])).toEqual(['c', 'd']);
  });

  test('adds combines the elements of the two lists', () => {
    expect(concat(['a', 'b'], ['c', 'd'])).toEqual(['a', 'b', 'c', 'd']);
    expect(concat([], ['c', 'd'])).toEqual(['c', 'd']);
  });

  test('works on strings', () => {
    expect(concat('foo', 'bar')).toBe('foobar');
    expect(concat('x', '')).toBe('x');
    expect(concat('', 'x')).toBe('x');
    expect(concat('', '')).toBe('');
  });

  test('throws if attempting to combine an array with a non-array', () => {
    expect(() => concat([1], 2)).toThrow(TypeError);
  });

  test('throws if not an array or String', () => {
    expect(() => concat({}, {})).toThrow(TypeError);
  });
});
