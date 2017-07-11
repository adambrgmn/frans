import test from 'ava';
import pipe from '../pipe';

const capitalize = str => `${str[0].toUpperCase()}${str.substring(1)}`;
const exclaim = str => `${str}!`;

test('Core.pipe', t => {
  {
    const should = 'Should create a pipe of functions';
    const actual = typeof pipe(x => x);
    const expected = 'function';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should take another argument and pipe it through';
    const actual = pipe(capitalize, exclaim)('hello');
    const expected = 'Hello!';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should be composable';
    const actual = pipe(capitalize, pipe(exclaim))('hello');
    const expected = 'Hello!';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should be composable (2)';
    const actual =
      pipe(capitalize, exclaim)('hello') === exclaim(capitalize('hello'));

    t.true(actual, should);
  }
});
