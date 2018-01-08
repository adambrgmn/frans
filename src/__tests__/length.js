import { length } from '../';

test('Core.length', () => {
  expect(length([])).toBe(0);
  expect(length([1, 2, 3])).toBe(3);
  expect(length((a, b) => a + b)).toBe(2);
});
