import either from '../either';

describe('Core.either', () => {
  test('combines two boolean-returning functions into one', () => {
    const even = x => x % 2 === 0;
    const gt10 = x => x > 10;
    const f = either(even, gt10);
    expect(f(8)).toBeTruthy();
    expect(f(13)).toBeTruthy();
    expect(f(7)).toBeFalsy();
  });

  test('accepts functions that take multiple parameters', () => {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = either(between, total20);
    expect(f(4, 5, 8)).toBeTruthy();
    expect(f(12, 2, 6)).toBeTruthy();
    expect(f(7, 5, 1)).toBeFalsy();
  });

  test('does not evaluate the second expression if the first one is true', () => {
    let effect = false;
    const T = () => true;
    const Z = () => {
      effect = true;
    };

    either(T, Z)();
    expect(effect).toBeFalsy();
  });
});
