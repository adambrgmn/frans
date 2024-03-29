import { mean } from '../mean';

describe('Core.mean', () => {
  test('return mean from a list of numbers', () => {
    expect(mean([2])).toBe(2);
    expect(mean([2, 7])).toBe(4.5);
    expect(mean([2, 7, 9])).toBe(6);
    expect(mean([2, 7, 9, 10])).toBe(7);
  });

  test('returns NaN for empty list', () => {
    expect(mean([])).toBe(NaN);
  });
});
