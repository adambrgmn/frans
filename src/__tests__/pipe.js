import pipe from '../pipe';

const capitalize = str => `${str[0].toUpperCase()}${str.substring(1)}`;
const exclaim = str => `${str}!`;

test('Core.pipe', () => {
  {
    const actual = typeof pipe(x => x);
    const expected = 'function';

    expect(actual).toBe(expected);
  }

  {
    const actual = pipe(capitalize, exclaim)('hello');
    const expected = 'Hello!';

    expect(actual).toBe(expected);
  }

  {
    const actual = pipe(capitalize, pipe(exclaim))('hello');
    const expected = 'Hello!';

    expect(actual).toBe(expected);
  }

  {
    const actual =
      pipe(capitalize, exclaim)('hello') === exclaim(capitalize('hello'));

    expect(actual).toBeTruthy();
  }
});
