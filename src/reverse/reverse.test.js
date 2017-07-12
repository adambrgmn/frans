import test from 'ava';
import reverse from '../reverse';

test('Core.reverse', t => {
  {
    const should = 'Should reverse an array';
    const actual = reverse([1, 2, 3]);
    const expected = [3, 2, 1];

    t.deepEqual(actual, expected, should);
  }

  {
    const should = 'Should reverse an string';
    const actual = reverse('123');
    const expected = '321';

    t.is(actual, expected, should);
  }
});
