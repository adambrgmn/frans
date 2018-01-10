import curry from '../curry';

describe('Core.curry', () => {
  const add = curry((a, b) => a + b);
  const add5 = add(5);

  test('returns a function', () => {
    expect(typeof add).toBe('function');
    expect(typeof add5).toBe('function');
  });

  test('executes function when all args are passed', () => {
    expect(add(5)(5)).toBe(10);
    expect(add(5, 5)).toBe(10);
    expect(add5(5)).toBe(10);
  });

  test('', () => {
    expect(add5(1)).toBe(6);
  });

  test('accepts any amount of arguments', () => {
    const multiArg = curry((a, b, c, d) => a + b + c + d);

    expect(multiArg(1, 2, 3, 4)).toBe(10);
    expect(multiArg(1, 2, 3)(4)).toBe(10);
    expect(multiArg(1, 2)(3, 4)).toBe(10);
    expect(multiArg(1)(2, 3, 4)).toBe(10);
    expect(multiArg(1)(2)(3)(4)).toBe(10);
  });

  test('passes any extra arguments into the function', () => {
    const mock = curry(function curried() {
      return Array.prototype.slice.call(arguments); // eslint-disable-line prefer-rest-params
    });

    expect(mock(1, 2, 3, 4)).toEqual([1, 2, 3, 4]);
  });
});
