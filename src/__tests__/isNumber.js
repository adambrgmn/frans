import { isNumber } from '../isNumber';

describe('Core.isNumber', () => {
  test('checks if a value is a number using typeof', () => {
    expect(isNumber(1)).toBeTruthy();
    expect(isNumber({})).toBeFalsy();
    expect(isNumber({ foo: 'bar' })).toBeFalsy();
    expect(isNumber(() => null)).toBeFalsy();
    expect(isNumber([])).toBeFalsy();
    expect(isNumber('a')).toBeFalsy();
    expect(isNumber(null)).toBeFalsy();
    expect(isNumber(undefined)).toBeFalsy();
  });
});
