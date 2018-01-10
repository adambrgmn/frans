import isString from '../isString';

describe('Core.isString', () => {
  test('checks if a value is a string using typeof', () => {
    expect(isString('a')).toBeTruthy();
    expect(isString({})).toBeFalsy();
    expect(isString({ foo: 'bar' })).toBeFalsy();
    expect(isString(() => null)).toBeFalsy();
    expect(isString([])).toBeFalsy();
    expect(isString(1)).toBeFalsy();
    expect(isString(null)).toBeFalsy();
    expect(isString(undefined)).toBeFalsy();
  });
});
