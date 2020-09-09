import { allPass } from '../allPass';

describe('Core.allPass', () => {
  const odd = (n: number) => n % 2 !== 0;
  const lt20 = (n: number) => n < 20;
  const gt5 = (n: number) => n > 5;

  it('reports whether all predicates are satisfied by a given value', () => {
    const ok = (x: number) => allPass([odd, lt20, gt5], x);

    expect(ok(7)).toBeTruthy();
    expect(ok(9)).toBeTruthy();
    expect(ok(10)).toBeFalsy();
    expect(ok(3)).toBeFalsy();
    expect(ok(21)).toBeFalsy();
  });

  it('returns true on empty predicate list', () => {
    expect(allPass([], 3)).toBeTruthy();
  });
});
