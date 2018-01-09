import { T } from '../';

describe('Core.T', () => {
  test('always returns true', () => {
    expect(typeof T).toBe('function');
    expect(T()).toBeTruthy();
    expect(T(false)).toBeTruthy();
    expect(T(1, 2, 3)).toBeTruthy();
  });
});
