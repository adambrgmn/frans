import assocPath from '../assocPath';

describe('Core.assocPath', () => {
  test('makes a shallow clone of an object, overriding only what is necessary for the path', () => {
    const obj1 = {
      a: { b: 1, c: 2, d: { e: 3 } },
      f: { g: { h: 4, i: [5, 6, 7], j: { k: 6, l: 7 } } },
      m: 8,
    };
    const obj2 = assocPath(['f', 'g', 'i', 1], 42, obj1);
    expect(obj2.f.g.i).toEqual([5, 42, 7]);

    expect(obj2.a).toBe(obj1.a);
    expect(obj2.m).toBe(obj1.m);
    expect(obj2.f.g.h).toBe(obj1.f.g.h);
    expect(obj2.f.g.j).toBe(obj1.f.g.j);
  });

  test('is the equivalent of clone and setPath if the property is not on the original', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 };
    const obj2 = assocPath(['x', 0, 'y'], 42, obj1);
    expect(obj2).toEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
      f: 5,
      x: [{ y: 42 }],
    });

    expect(obj2.a).toBe(obj1.a);
    expect(obj2.b).toBe(obj1.b);
    expect(obj2.e).toBe(obj1.e);
    expect(obj2.f).toBe(obj1.f);
  });

  test('empty path replaces the the whole object', () => {
    expect(assocPath([], 3, { a: 1, b: 2 })).toBe(3);
  });

  test('replaces `undefined` with a new object', () => {
    expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: undefined })).toEqual({
      foo: { bar: { baz: 42 } },
    });
  });

  test('replaces `null` with a new object', () => {
    expect(assocPath(['foo', 'bar', 'baz'], 42, { foo: null })).toEqual({
      foo: { bar: { baz: 42 } },
    });
  });
});
