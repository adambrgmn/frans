import reduce from '../reduce';

test('Core.reduce', () => {
  {
    const actual = reduce((acc, v) => acc + v, 0)([1, 2, 3, 4]);
    const expected = 1 + 2 + 3 + 4;

    expect(actual).toBe(expected);
  }

  {
    const actual = reduce((acc, v) => acc.concat(v), [])([1, 2, 3, 4]);
    const expected = [1, 2, 3, 4];

    expect(actual).toEqual(expected);
  }
});
