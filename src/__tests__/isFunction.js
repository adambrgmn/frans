import { isFunction } from '../';

test('Core.isFunction', () => {
  expect(isFunction(() => null)).toBeTruthy();
  expect(isFunction({})).toBeFalsy();
  expect(isFunction({ foo: 'bar' })).toBeFalsy();
  expect(isFunction([])).toBeFalsy();
  expect(isFunction('a')).toBeFalsy();
  expect(isFunction(1)).toBeFalsy();
  expect(isFunction(null)).toBeFalsy();
  expect(isFunction(undefined)).toBeFalsy();
});
