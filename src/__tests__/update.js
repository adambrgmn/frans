import { update } from '../';

test('Core.update', () => {
  const list = [1, 2, 3];
  expect(update(1, 3, list)).toEqual([1, 3, 3]);
  expect(update(-1, 2, list)).toEqual([1, 2, 2]);
  expect(update(10, 10, list)).toBe(list);
});
