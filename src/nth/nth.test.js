import test from 'ava';
import nth from '../nth';

test('Core.nth', t => {
  {
    const should = 'Should return the nth element in an array';
    const actual = nth(2)([1, 2, 3]);
    const expected = 3;

    t.is(actual, expected, should);
  }

  {
    const should = 'Should return the nth element in a string';
    const actual = nth(1)('abc');
    const expected = 'b';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should return the nth element from the end if n < 0';
    const actual = nth(-1)([1, 2, 3]);
    const expected = 3;

    t.is(actual, expected, should);
  }
});
