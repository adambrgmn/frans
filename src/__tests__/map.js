import map from '../map';

describe('Core.map', () => {
  const times2 = x => x * 2;
  const dec = x => x - 1;

  test('maps simple functions over arrays', () => {
    expect(map(times2, [1, 2, 3, 4])).toEqual([2, 4, 6, 8]);
  });

  test('maps over objects', () => {
    expect(map(dec, {})).toEqual({});
    expect(map(dec, { x: 4, y: 5, z: 6 })).toEqual({ x: 3, y: 4, z: 5 });
  });

  test('composes', () => {
    const mdouble = x => map(times2, x);
    const mdec = x => map(dec, x);
    expect(mdec(mdouble([10, 20, 30]))).toEqual([19, 39, 59]);
  });
});
