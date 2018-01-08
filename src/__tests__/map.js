import { map } from '../';

test('Core.map', () => {
  const square = n => n ** 2;
  const list = [1, 2, 3, 4];
  const obj = { a: 1, b: 2, c: 3, d: 4 };

  expect(map(square, list)).toEqual([1, 4, 9, 16]);
  expect(map(square, list)).not.toBe(list);

  expect(map(square, obj)).toEqual({ a: 1, b: 4, c: 9, d: 16 });
  expect(map(square, obj)).not.toBe(obj);
});
