import { is } from '../';

test('Core.is', () => {
  expect(is('string', 'abc')).toBeTruthy();
  expect(is('number', 1)).toBeTruthy();
  expect(is('object', {})).toBeTruthy();
  expect(is('object', [])).toBeTruthy();
});
