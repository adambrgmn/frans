import { filter } from '../filter';

describe('Core.filter', () => {
  const even = (x) => x % 2 === 0;
  const above100 = (x) => x > 100;
  const positive = (x) => x > 0;

  test('reduces an array to those matching a filter', () => {
    expect(filter(even, [1, 2, 3, 4, 5])).toEqual([2, 4]);
  });

  test('returns an empty array if no element matches', () => {
    expect(filter(above100, [1, 9, 99])).toEqual([]);
  });

  test('returns an empty array if asked to filter an empty array', () => {
    expect(filter(above100, [])).toEqual([]);
  });

  test('filters objects', () => {
    expect(filter(positive, {})).toEqual({});
    expect(filter(positive, { x: 0, y: 0, z: 0 })).toEqual({});
    expect(filter(positive, { x: 1, y: 0, z: 0 })).toEqual({ x: 1 });
    expect(filter(positive, { x: 1, y: 2, z: 0 })).toEqual({ x: 1, y: 2 });
    expect(filter(positive, { x: 1, y: 2, z: 3 })).toEqual({
      x: 1,
      y: 2,
      z: 3,
    });
  });
});
