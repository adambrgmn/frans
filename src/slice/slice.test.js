import test from 'ava';
import slice from '../slice';

test('Core.slice', t => {
  {
    const should = 'Should return a defined slice of an array';
    const actual = slice(1, 3)([1, 2, 3, 4, 5]);
    const expected = [2, 3];

    t.deepEqual(actual, expected, should);
  }

  {
    const should = 'Should return slice from start to end if 2 arg is skipped';
    const actual = slice(1)([1, 2, 3, 4, 5]);
    const expected = [2, 3, 4, 5];

    t.deepEqual(actual, expected, should);
  }

  {
    const should = 'Should return a defined slice of an array (negative)';
    const actual = slice(-1)([1, 2, 3, 4, 5]);
    const expected = [5];

    t.deepEqual(actual, expected, should);
  }

  {
    const should =
      'Should return slice from start to end if 2 arg is skipped (negative)';
    const actual = slice(-2)([1, 2, 3, 4, 5]);
    const expected = [4, 5];

    t.deepEqual(actual, expected, should);
  }
});
