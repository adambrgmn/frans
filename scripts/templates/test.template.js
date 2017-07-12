import test from 'ava';
import module from '../module';

test('Core.module', t => {
  const should = 'Should ...';
  const actual = module();
  const expected = '';

  t.is(actual, expected, should);
});
