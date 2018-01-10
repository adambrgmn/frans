import { sum } from '../';

describe('Core.sum', () => {
  test('adds all numbers in a list', () => {
    expect(sum([1, 2, 3, 4])).toBe(1 + 2 + 3 + 4);
    expect(sum([-1, -2, -3, -4])).toBe(-1 + -2 + -3 + -4);
  });
});
