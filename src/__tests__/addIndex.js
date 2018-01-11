import addIndex from '../addIndex';
import { map, reduce, all } from '../';

describe('Core.addIndex', () => {
  describe('unary functions like `map`', () => {
    const times2 = x => x * 2;
    const addIndexParam = (x, idx) => x + idx;
    const squareEnds = (x, idx, list) =>
      idx === 0 || idx === list.length - 1 ? x * x : x;

    const mapIndexed = addIndex(map);

    test('works just like a normal map', () => {
      expect(mapIndexed(times2, [1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
    });

    test('passes the index as a second parameter to the callback', () => {
      expect(mapIndexed(addIndexParam, [8, 6, 7, 5, 3, 0, 9])).toEqual([
        8,
        7,
        9,
        8,
        7,
        5,
        15,
      ]);
    });

    test('passes the entire list as a third parameter to the callback', () => {
      expect(mapIndexed(squareEnds, [8, 6, 7, 5, 3, 0, 9])).toEqual([
        64,
        6,
        7,
        5,
        3,
        0,
        81,
      ]);
    });
  });

  describe('binary functions like `reduce`', () => {
    const reduceIndexed = addIndex(reduce);
    const timesIndexed = (tot, num, idx) => tot + num * idx;
    const objectify = (acc, elem, idx) => ({ ...acc, [elem]: idx });

    test('passes the index as a third parameter to the predicate', () => {
      expect(reduceIndexed(timesIndexed, 0, [1, 2, 3, 4, 5])).toBe(40);
      expect(reduceIndexed(objectify, {}, ['a', 'b', 'c', 'd', 'e'])).toEqual({
        a: 0,
        b: 1,
        c: 2,
        d: 3,
        e: 4,
      });
    });

    test('passes the entire list as a fourth parameter to the predicate', () => {
      const list = [1, 2, 3];
      expect(reduceIndexed((acc, x, idx, ls) => ls, 0, list)).toBe(list);
    });
  });

  describe('works with functions like `all` that do not typically have index applied', () => {
    const allIndexed = addIndex(all);
    const superDiagonal = list => allIndexed((a, b) => a > b, list);

    test('passes the index as a second parameter', () => {
      expect(superDiagonal([8, 6, 5, 4, 9])).toBeTruthy();
      expect(superDiagonal([8, 6, 1, 3, 9])).toBeFalsy();
    });
  });

  describe('works with userdefined functions as well', () => {
    const callIndexed = addIndex(fn => (...args) => fn(...args));
    expect(callIndexed((...args) => args)()).toEqual([0, undefined]);
  });
});
