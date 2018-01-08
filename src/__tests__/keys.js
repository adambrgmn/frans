import { keys } from '../';
import { _keys } from '../keys';

test('Core.keys', () => {
  expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
});

test('Internal._keys', () => {
  expect(_keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
});
