import { join } from '../';

test('Core.join', () => {
  expect(join(['a', 'b', 'c'], '')).toBe('abc');
  expect(join(['a', 'b', 'c'])).toBe('a,b,c');
  expect(join([1, 2, 3], ' - ')).toBe('1 - 2 - 3');
});
