import { median } from '../median';

describe('Core.median', () => {
  test('returns middle value of an odd-length list', () => {
    expect(median([2, 9, 7])).toBe(7);
    expect(median([3, 2, 11, 7, 9])).toBe(7);
    expect(median([3, 11, 11, 7, 9])).toBe(9);
    expect(median([2])).toBe(2);
  });

  test('returns mean of two middle values of a nonempty even-length list', () => {
    expect(median([7, 2])).toBe(4.5);
    expect(median([7, 2, 10, 9])).toBe(8);
  });

  test('returns NaN for an empty list', () => {
    expect(median([])).toBe(NaN);
  });

  test('handles array-like object', () => {
    function getArgs() {
      return arguments; // eslint-disable-line prefer-rest-params
    }

    expect(median(getArgs(1, 2, 3))).toBe(2);
  });
});
