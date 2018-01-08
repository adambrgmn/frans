import isArray, { _isArray } from '../isArray';

test('Core.isArray', () => {
  expect(isArray([])).toBeTruthy();
  expect(isArray([1, 2, 3])).toBeTruthy();
  expect(isArray({ foo: 'bar' })).toBeFalsy();
  expect(isArray(() => [1, 2, 3])).toBeFalsy();
  expect(isArray('baz')).toBeFalsy();
  expect(isArray(null)).toBeFalsy();
  expect(isArray(undefined)).toBeFalsy();
});

test('Internal._isArray', () => {
  expect(_isArray([])).toBeTruthy();
  expect(_isArray([1, 2, 3])).toBeTruthy();
  expect(_isArray({ foo: 'bar' })).toBeFalsy();
  expect(_isArray(() => [1, 2, 3])).toBeFalsy();
  expect(_isArray('baz')).toBeFalsy();
  expect(_isArray(null)).toBeFalsy();
  expect(_isArray(undefined)).toBeFalsy();
});
