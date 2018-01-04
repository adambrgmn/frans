import prop from '../prop';

test('Core.prop', () => {
  {
    const actual = prop('foo')({ foo: 'bar' });
    const expected = 'bar';

    expect(actual).toBe(expected);
  }

  {
    const actual = prop('foo')({ bar: 'foo' });
    const expected = undefined;

    expect(actual).toBe(expected);
  }

  {
    const actual = prop(2)(['a', 'b', 'c']);
    const expected = 'c';

    expect(actual).toBe(expected);
  }
});
