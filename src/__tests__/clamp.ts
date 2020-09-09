import { clamp } from '../clamp';

describe('Core.clamp', () => {
  test('restrict number by min and max values', () => {
    const min0Max10 = (n) => clamp(0, 10, n);
    expect(min0Max10(0)).toBe(0);
    expect(min0Max10(0)).toBe(0);
    expect(min0Max10(-1)).toBe(0);
    expect(min0Max10(100)).toBe(10);
  });

  test('throws an error if min is greater than max', () => {
    expect(() => clamp(10, 0, 5)).toThrow(Error);
  });
});
