import type from '../type';

describe('Core.type', () => {
  test('"Array" if given an array literal', () => {
    expect(type([1, 2, 3])).toBe('Array');
  });

  test('"Arguments" if given an arguments object', () => {
    function getArgs() {
      return arguments; // eslint-disable-line prefer-rest-params
    }
    expect(type(getArgs())).toBe('Arguments');
  });

  test('"Object" if given an object literal', () => {
    expect(type({ batman: 'na na na na na na na' })).toBe('Object');
  });

  test('"RegExp" if given a RegExp literal', () => {
    expect(type(/[A-z]/)).toBe('RegExp');
  });

  test('"Number" if given a numeric value', () => {
    expect(type(4)).toBe('Number');
  });

  test('"Number" if given the NaN value', () => {
    expect(type(NaN)).toBe('Number');
  });

  test('"String" if given a String literal', () => {
    expect(type('Gooooodd Mornning Ramda!!')).toBe('String');
  });

  test('"String" if given a String object', () => {
    expect(type(new String('I am a String object'))).toBe('String'); // eslint-disable-line no-new-wrappers
  });

  test('"Null" if given the null value', () => {
    expect(type(null)).toBe('Null');
  });

  test('"Undefined" if given the undefined value', () => {
    expect(type(undefined)).toBe('Undefined');
  });
});
