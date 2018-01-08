import { T } from '../';

test('Core.T', () => {
  expect(typeof T).toBe('function');
  expect(T()).toBeTruthy();
  expect(T(false)).toBeTruthy();
  expect(T(1, 2, 3)).toBeTruthy();
});
