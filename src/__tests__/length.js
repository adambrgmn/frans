import length from '../length';

describe('Core.length', () => {
  test('returns the length of a list', () => {
    expect(length([])).toBe(0);
    expect(length(['a', 'b', 'c', 'd'])).toBe(4);
  });

  test('returns the length of a string', () => {
    expect(length('')).toBe(0);
    expect(length('xyz')).toBe(3);
  });

  test('returns the length of a function', () => {
    expect(length(() => {})).toBe(0);
    expect(length((x, y, z) => z)).toBe(3);
  });

  test('returns the length of an arguments object', () => {
    function anon() {
      return arguments; // eslint-disable-line prefer-rest-params
    }

    expect(length(anon())).toBe(0);
    expect(length(anon('x', 'y', 'z'))).toBe(3);
  });

  test('returns NaN for value of unexpected type', () => {
    expect(length(0)).toBe(NaN);
    expect(length({})).toBe(NaN);
    expect(length(null)).toBe(NaN);
    expect(length(undefined)).toBe(NaN);
  });

  test('returns NaN for length property of unexpected type', () => {
    expect(length({ length: '' })).toBe(NaN);
    expect(length({ length: '1.23' })).toBe(NaN);
    expect(length({ length: null })).toBe(NaN);
    expect(length({ length: undefined })).toBe(NaN);
    expect(length({})).toBe(NaN);
  });
});
