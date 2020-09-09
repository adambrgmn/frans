import { F } from '../F';

describe('Core.T', () => {
  test('always returns false', () => {
    expect(typeof F).toBe('function');
    expect(F()).toBeFalsy();
    expect(F(true)).toBeFalsy();
    expect(F(1, 2, 3)).toBeFalsy();
  });
});
