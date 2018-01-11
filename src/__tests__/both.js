import both from '../both';

describe('Core.both', () => {
  test('combines two boolean-returning functions into one', () => {
    const even = x => x % 2 === 0;
    const gt10 = x => x > 10;
    const f = both(even, gt10);

    expect(f(8)).toBeFalsy();
    expect(f(13)).toBeFalsy();
    expect(f(14)).toBeTruthy();
  });

  test('accepts functions that take multiple parameters', () => {
    const between = (a, b, c) => a < b && b < c;
    const total20 = (a, b, c) => a + b + c === 20;
    const f = both(between, total20);

    expect(f(4, 5, 11)).toBeTruthy();
    expect(f(0, 1, 19)).toBeTruthy();
    expect(f(12, 2, 6)).toBeFalsy();
    expect(f(5, 6, 15)).toBeFalsy();
  });

  test('does not evaluate the second expression if the first one is false', () => {
    let effect = 'not evaluated';
    const F = () => false;
    const Z = () => {
      effect = 'Z got evaluated';
    };

    both(F, Z)();
    expect(effect).toBe('not evaluated');
  });
});
