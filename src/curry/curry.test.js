import test from 'ava';
import curry from '../curry';

test('Core.curry', t => {
  const add = curry((a, b) => a + b);
  const add5 = add(5);

  {
    const should = 'Should curry a function';
    const actual = typeof add;
    const expected = 'function';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should partially apply arguments';
    const actual = typeof add5;
    const expected = 'function';

    t.is(actual, expected, should);
  }

  {
    const should = 'Should run fn once all args are passed';
    const actual = add5(5);
    const expected = 10;

    t.is(actual, expected, should);
  }

  {
    const should = 'Should be able to run multiple times';
    const actual = add5(1);
    const expected = 6;

    t.is(actual, expected, should);
  }

  {
    const multiArg = curry((a, b, c, d) => a + b + c + d);

    const should = 'Should accept any number of arguments';
    const actual = multiArg(1)(2)(3, 4);
    const expected = 10;

    t.is(actual, expected, should);
  }

  {
    const reduce = curry((fn, init, arr) => {
      let l = init;
      for (let i = 0; i < arr.length; i += 1) l = fn(l, arr[i]);
      return l;
    });

    const should = 'Should be able curry more advanced functions';
    const actual = [
      reduce((a, v) => a + v)(0)([1, 2, 3, 4]),
      reduce((a, v) => a + v, 1)([1, 2, 3, 4]),
      reduce((a, v) => a + v)(2, [1, 2, 3, 4]),
      reduce((a, v) => a + v, 3, [1, 2, 3, 4]),
    ];
    const expected = [10, 11, 12, 13];

    t.deepEqual(actual, expected, should);
  }
});
