import { adjust } from '../adjust';

describe('Core.adjust', () => {
  const add = (x: number) => (y: number) => x + y;

  test('applies the given function to the value at the given index of the supplied array', () => {
    expect(adjust(2, add(1), [0, 1, 2, 3])).toEqual([0, 1, 3, 3]);
  });

  test('offsets negative indexes from the end of the array', () => {
    expect(adjust(-3, add(1), [0, 1, 2, 3])).toEqual([0, 2, 2, 3]);
  });

  test('returns the original array if the supplied index is out of bounds', () => {
    const list = [0, 1, 2, 3];
    expect(adjust(4, add(1), list)).toBe(list);
    expect(adjust(-5, add(1), list)).toBe(list);
  });

  test('does not mutate the original array', () => {
    const list = [0, 1, 2, 3];
    expect(adjust(2, add(1), list)).toEqual([0, 1, 3, 3]);
    expect(list).toEqual([0, 1, 2, 3]);
  });

  test('accepts an array-like object', () => {
    function args(..._: any[]) {
      return arguments;
    }

    expect(adjust(2, add(1), args(0, 1, 2, 3))).toEqual([0, 1, 3, 3]);
  });
});
