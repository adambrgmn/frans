import { insert } from '../';

test('Core.insert', () => {
  expect(insert(2, 'x', [1, 2, 3, 4])).toEqual([1, 2, 'x', 3, 4]);
  expect(insert(0, 'x', [1, 2, 3, 4])).toEqual(['x', 1, 2, 3, 4]);
  expect(insert(10, 'x', [1, 2, 3, 4])).toEqual([1, 2, 3, 4, 'x']);
  expect(insert(2, 'x', [])).toEqual(['x']);
});
