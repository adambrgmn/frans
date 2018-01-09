import { always } from '../';

describe('Core.always', () => {
  test('returns a function that returns the object initially supplied', () => {
    const theMeaning = always(42);

    expect(theMeaning()).toBe(42);
    expect(theMeaning(10)).toBe(42);
    expect(theMeaning(false)).toBe(42);
  });

  test('works with various types', () => {
    expect(always(false)()).toBe(false);
    expect(always('abc')()).toBe('abc');
    expect(always({ a: 1, b: 2 })()).toEqual({ a: 1, b: 2 });

    const obj = { a: 1, b: 2 };
    expect(always(obj)()).toBe(obj);

    const now = new Date(1776, 6, 4);
    expect(always(now)()).toEqual(new Date(1776, 6, 4));
    expect(always(undefined)()).toBe(undefined);
  });
});
