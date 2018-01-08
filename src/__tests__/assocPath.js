import { assocPath } from '../';

test('Core.assocPath', () => {
  const origin = { a: 1, b: { c: 1 } };
  const result = assocPath(['a'], 2, origin);
  expect(result).toEqual({ a: 2, b: { c: 1 } });
  expect(result).not.toBe(origin);
  expect(result.b).toBe(origin.b);

  expect(assocPath(['a', 0], 1, { a: [0] })).toEqual({ a: [1] });
  expect(assocPath([], 0, {})).toBe(0);
  expect(assocPath(['a', 'b', 'c'], 'hidden', {})).toEqual({
    a: { b: { c: 'hidden' } },
  });

  expect(assocPath(['a', 1, 'b'], 'foo', { a: [null, { b: 'bar' }] })).toEqual({
    a: [null, { b: 'foo' }],
  });

  {
    const obj1 = {
      a: { b: 1, c: 2, d: { e: 3 } },
      f: { g: { h: 4, i: [5, 6, 7], j: { k: 6, l: 7 } } },
      m: 8,
    };
    const obj2 = assocPath(['f', 'g', 'i', 1], 42, obj1);
    expect(obj2.f.g.i).toEqual([5, 42, 7]);
  }

  {
    const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 };
    const obj2 = assocPath(['x', 0, 'y'], 42, obj1);
    expect(obj2).toEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
      f: 5,
      x: [{ y: 42 }],
    });
  }

  expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: undefined })).toEqual({
    foo: { bar: { baz: 42 } },
  });

  expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: null })).toEqual({
    foo: { bar: { baz: 42 } },
  });
});
