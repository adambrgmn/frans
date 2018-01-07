import find from '../find';

test('Core.find', () => {
  {
    const actual = find(n => n === 'b', ['a', 'b', 'c']);
    const expected = 'b';

    expect(actual).toBe(expected);
  }

  {
    const actual = find(n => n === 'd', ['a', 'b', 'c']);
    const expected = undefined;

    expect(actual).toBe(expected);
  }
});
