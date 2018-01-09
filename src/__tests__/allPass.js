import { allPass } from '../';

describe('Core.allPass', () => {
  const odd = n => n % 2 !== 0;
  const lt20 = n => n < 20;
  const gt5 = n => n > 5;

  it('reports whether all predicates are satisfied by a given value', () => {
    const ok = x => allPass([odd, lt20, gt5], x);

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
