import { path } from '../path';

describe('Core.path', () => {
  const deepObject = {
    a: { b: { c: 'c' } },
    falseVal: false,
    nullVal: null,
    undefinedVal: undefined,
    arrayVal: ['arr'],
  };

  test('takes a path and an object and returns the value at the path or undefined', () => {
    const obj = {
      a: { b: { c: 100, d: 200 }, e: { f: [100, 101, 102], g: 'G' }, h: 'H' },
      i: 'I',
      j: ['J'],
    };

    expect(path(['a', 'b', 'c'], obj)).toBe(100);
    expect(path(['a', 'b'], obj)).toBe(obj.a.b);
    expect(path([], obj)).toBe(obj);
    expect(path(['a', 'e', 'f', 1], obj)).toBe(101);
    expect(path(['j', 0], obj)).toBe('J');
    expect(path(['j', 1], obj)).toBe(undefined);
  });

  test("gets a deep property's value from objects", () => {
    expect(path(['a', 'b', 'c'], deepObject)).toBe('c');
    expect(path(['a'], deepObject)).toBe(deepObject.a);
  });

  test('returns undefined for items not found', () => {
    expect(path(['a', 'b', 'foo'], deepObject)).toBe(undefined);
    expect(path(['bar'], deepObject)).toBe(undefined);
    expect(path(['a', 'b'], { a: null })).toBe(undefined);
  });

  test('works with falsy items', () => {
    expect(path(['toString'], false)).toBe(Boolean.prototype.toString);
  });

  test('returns undefined if object is undefined or null', () => {
    expect(path(['a', 'b'], null)).toBe(undefined);
    expect(path(['a', 'b'], undefined)).toBe(undefined);
  });
});
