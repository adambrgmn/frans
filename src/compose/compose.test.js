import test from 'ava';
import compose from '../compose';

const capitalize = x => `${x[0].toUpperCase()}${x.substring(1)}`;
const reverse = x => {
  let ret = '';
  for (let i = x.length - 1; i > -1; i -= 1) ret += x[i];

  return ret;
};

test('Core.compose', t => {
  {
    const should =
      'Should compose any number of functions and return a function';
    const actual = typeof compose(reverse, capitalize);
    const expected = 'function';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should compose any number of functions';
    const actual = compose(reverse, capitalize)('hello');
    const expected = 'olleH';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should be composeable';
    const actual = compose(capitalize, compose(reverse, capitalize))('hello');
    const expected = 'OlleH';

    t.is(actual, expected, should);
  }
});
