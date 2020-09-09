import { isFunction } from '../isFunction';

describe('Core.isFunction', () => {
  test('checks if a value is a function using typeof', () => {
    expect(isFunction(() => null)).toBeTruthy();
    expect(isFunction({})).toBeFalsy();
    expect(isFunction({ foo: 'bar' })).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction(null)).toBeFalsy();
    expect(isFunction(undefined)).toBeFalsy();
  });
});
