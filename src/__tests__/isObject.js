import { isObject } from '../';

test('Core.isObject', () => {
  expect(isObject({})).toBeTruthy();
  expect(isObject({ foo: 'bar' })).toBeTruthy();
  expect(isObject(() => null)).toBeFalsy();
  expect(isObject([])).toBeFalsy();
  expect(isObject('a')).toBeFalsy();
  expect(isObject(1)).toBeFalsy();
  expect(isObject(null)).toBeFalsy();
  expect(isObject(undefined)).toBeFalsy();
});
