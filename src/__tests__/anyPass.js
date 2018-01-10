import anyPass from '../anyPass';

describe('Core.anyPass', () => {
  const odd = n => n % 2 !== 0;
  const lt20 = n => n < 20;
  const gt5 = n => n > 5;

  test('reports whether all predicates are satisfied by a given value', () => {
    const ok = x => anyPass([odd, lt20, gt5], x);

    expect(ok(7)).toBeTruthy();
    expect(ok(9)).toBeTruthy();
    expect(ok(10)).toBeTruthy();
    expect(ok(3)).toBeTruthy();
    expect(anyPass([odd, lt20], 22)).toBeFalsy();
  });

  test('returns true on empty predicate list', () => {
    expect(anyPass([], 3)).toBeFalsy();
  });
});
