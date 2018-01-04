import curry from '../curry';

test('Core.curry', () => {
  const add = curry((a, b) => a + b);
  const add5 = add(5);

  {
    const actual = typeof add;
    const expected = 'function';

    expect(actual).toBe(expected);
  }

  {
    const actual = typeof add5;
    const expected = 'function';

    expect(actual).toBe(expected);
  }

  {
    const actual = add5(5);
    const expected = 10;

    expect(actual).toBe(expected);
  }

  {
    const actual = add5(1);
    const expected = 6;

    expect(actual).toBe(expected);
  }

  {
    const multiArg = curry((a, b, c, d) => a + b + c + d);

    const actual = multiArg(1)(2)(3, 4);
    const expected = 10;

    expect(actual).toBe(expected);
  }

  {
    const reduce = curry((fn, init, arr) => {
      let l = init;
      for (let i = 0; i < arr.length; i += 1) l = fn(l, arr[i]);
      return l;
    });

    const actual = [
      reduce((a, v) => a + v)(0)([1, 2, 3, 4]),
      reduce((a, v) => a + v, 1)([1, 2, 3, 4]),
      reduce((a, v) => a + v)(2, [1, 2, 3, 4]),
      reduce((a, v) => a + v, 3, [1, 2, 3, 4]),
    ];
    const expected = [10, 11, 12, 13];

    expect(actual).toEqual(expected);
  }
});
