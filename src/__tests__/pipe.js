import { pipe } from '../pipe';

describe('Core.pipe', () => {
  const capitalize = (x) => `${x[0].toUpperCase()}${x.substring(1)}`;
  const reverse = (x) => {
    let ret = '';
    for (let i = x.length - 1; i > -1; i -= 1) ret += x[i];

    return ret;
  };

  test('creates a new function', () => {
    const actual = typeof pipe(reverse, capitalize);
    const expected = 'function';
    expect(actual).toBe(expected);
  });

  test('composes functions into a single function', () => {
    const actual = pipe(reverse, capitalize)('hello');
    const expected = 'Olleh';

    expect(actual).toBe(expected);
  });

  test('is composable by it self', () => {
    const actual = pipe(capitalize, pipe(reverse, capitalize))('hello');
    const expected = 'OlleH';

    expect(actual).toBe(expected);
  });
});
