import { isArray } from '../isArray';

describe('Internal.isArray', () => {
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
