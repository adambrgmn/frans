import { isArray } from '../';
import { _isArray } from '../isArray';

describe('Core.isArray', () => {
  test('checks if a value is an array', () => {
    expect(isArray([])).toBeTruthy();
    expect(isArray([1, 2, 3])).toBeTruthy();
    expect(isArray({ foo: 'bar' })).toBeFalsy();
    expect(isArray(() => [1, 2, 3])).toBeFalsy();
    expect(isArray('baz')).toBeFalsy();
    expect(isArray(null)).toBeFalsy();
    expect(isArray(undefined)).toBeFalsy();
  });
});

describe('Internal._isArray', () => {
  test('checks if a value is an array', () => {
    expect(_isArray([])).toBeTruthy();
    expect(_isArray([1, 2, 3])).toBeTruthy();
    expect(_isArray({ foo: 'bar' })).toBeFalsy();
    expect(_isArray(() => [1, 2, 3])).toBeFalsy();
    expect(_isArray('baz')).toBeFalsy();
    expect(_isArray(null)).toBeFalsy();
    expect(_isArray(undefined)).toBeFalsy();
  });
});
