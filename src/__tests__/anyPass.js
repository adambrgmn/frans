import { anyPass } from '../';

test('Core.anyPass', () => {
  expect(anyPass([() => true, () => true], 'foo')).toBeTruthy();
  expect(anyPass([() => true, () => false], 'foo')).toBeTruthy();
  expect(anyPass([() => false, () => false], 'foo')).toBeFalsy();
});
