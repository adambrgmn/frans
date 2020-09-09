import { negate } from '../negate';

describe('Core.negate', () => {
  test('negates the given number', () => {
    expect(negate(1)).toBe(-1);
    expect(negate(10)).toBe(-10);
    expect(negate(-1)).toBe(1);
    expect(negate(-10)).toBe(10);
  });
});
