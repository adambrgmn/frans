import { adjust } from '../';

test('Core.adjust', () => {
  const add = x => y => x + y;
  const list = [0, 1, 2];

  expect(adjust(add(10), 1, list)).toEqual([0, 11, 2]);
  expect(adjust(add(10), 1, list)).not.toBe(list);

  expect(adjust(add(10), -1, list)).toEqual([0, 1, 12]);
  expect(adjust(add(10), 10, list)).toBe(list);
});
