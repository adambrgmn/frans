import isObject from '../isObject';

describe('Core.isObject', () => {
  test('checks if a value is an object (excludes arrays)', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject({ foo: 'bar' })).toBeTruthy();
    expect(isObject(() => null)).toBeFalsy();
    expect(isObject([])).toBeFalsy();
    expect(isObject('a')).toBeFalsy();
    expect(isObject(1)).toBeFalsy();
    expect(isObject(null)).toBeFalsy();
    expect(isObject(undefined)).toBeFalsy();
  });
});
