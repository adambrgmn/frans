import test from 'ava';
import last from '../last';

test('Core.last', t => {
  {
    const should = 'Should return the last element in an array';
    const actual = last([1, 2, 3, 4]);
    const expected = 4;

    t.is(actual, expected, should);
  }

  {
    const should = 'Should return the last character in a string';
    const actual = last('abcd');
    const expected = 'd';

    t.is(actual, expected, should);
  }
});
