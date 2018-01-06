import concat from '../concat';

test('Core.concat', () => {
  {
    const actual = concat([1, 2, 3], [4, 5, 6]);
    const expected = [1, 2, 3, 4, 5, 6];

    expect(actual).toEqual(expected);
  }

  {
    const actual = concat('abc', 'def');
    const expected = 'abcdef';

    expect(actual).toBe(expected);
  }

  expect(() => concat([1, 2, 3], 'abc')).toThrow(TypeError);
});
