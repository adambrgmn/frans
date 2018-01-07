import isNumber from '../isNumber';

test('Core.isNumber', () => {
  expect(isNumber(1)).toBeTruthy();
  expect(isNumber({})).toBeFalsy();
  expect(isNumber({ foo: 'bar' })).toBeFalsy();
  expect(isNumber(() => null)).toBeFalsy();
  expect(isNumber([])).toBeFalsy();
  expect(isNumber('a')).toBeFalsy();
  expect(isNumber(null)).toBeFalsy();
  expect(isNumber(undefined)).toBeFalsy();
});
