import { pluck } from '../pluck';

describe('Core.pluck', () => {
  test('maps the appropriate property over an array', () => {
    expect(pluck('a', [{ a: 1 }, { a: 2 }, { b: 3 }])).toEqual([
      1,
      2,
      undefined,
    ]);

    expect(pluck('val', { a: { val: 1 }, b: { val: 2 } })).toEqual({
      a: 1,
      b: 2,
    });
  });
});
