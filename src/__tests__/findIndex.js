import findIndex from '../findIndex';

test('Core.findIndex', () => {
  {
    const actual = findIndex(el => el === 'b', ['a', 'b', 'c']);
    const expected = 1;

    expect(actual).toBe(expected);
  }

  {
    const actual = findIndex(el => el === 'd', ['a', 'b', 'c']);
    const expected = -1;

    expect(actual).toBe(expected);
  }
});
