import { isString } from '../';

test('Core.isString', () => {
  expect(isString('a')).toBeTruthy();
  expect(isString({})).toBeFalsy();
  expect(isString({ foo: 'bar' })).toBeFalsy();
  expect(isString(() => null)).toBeFalsy();
  expect(isString([])).toBeFalsy();
  expect(isString(1)).toBeFalsy();
  expect(isString(null)).toBeFalsy();
  expect(isString(undefined)).toBeFalsy();
});
