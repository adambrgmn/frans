import { dec } from '../dec';

describe('Core.dec', () => {
  test('decrease a number by one', () => {
    expect(dec(1)).toBe(0);
    expect(dec(10)).toBe(9);
    expect(dec(0)).toBe(-1);
  });
});
