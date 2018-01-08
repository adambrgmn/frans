import { compose } from '../';

const capitalize = x => `${x[0].toUpperCase()}${x.substring(1)}`;
const reverse = x => {
  let ret = '';
  for (let i = x.length - 1; i > -1; i -= 1) ret += x[i];

  return ret;
};

test('Core.compose', () => {
  {
    const actual = typeof compose(reverse, capitalize);
    const expected = 'function';
    expect(actual).toBe(expected);
  }

  {
    const actual = compose(reverse, capitalize)('hello');
    const expected = 'olleH';

    expect(actual).toBe(expected);
  }

  {
    const actual = compose(capitalize, compose(reverse, capitalize))('hello');
    const expected = 'OlleH';

    expect(actual).toBe(expected);
  }
});
