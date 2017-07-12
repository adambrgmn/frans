import test from 'ava';
import prop from '../prop';

test('Core.prop', t => {
  const should = 'Should get a certain prop from an object';

  {
    const actual = prop('foo')({ foo: 'bar' });
    const expected = 'bar';

    t.is(actual, expected, should);
  }

  {
    const actual = prop('foo')({ bar: 'foo' });
    const expected = undefined;

    t.is(actual, expected, should);
  }

  {
    const actual = prop(2)(['a', 'b', 'c']);
    const expected = 'c';

    t.is(actual, expected, should);
  }
});
