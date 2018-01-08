import { values } from '../';
import { _values } from '../values';

test('Core.values', () => {
  expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);

  global.Object.values = undefined;
  expect(values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
});

test('Internal._values', () => {
  expect(_values({ a: 1, b: 2, c: 3 })).toEqual([1, 2, 3]);
});
