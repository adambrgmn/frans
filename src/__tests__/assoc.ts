import { assoc } from '../assoc';

describe('Core.assoc', () => {
  test('makes a shallow clone of an object, overriding only the specified property', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 };
    const obj2 = assoc('e', { x: 42 }, obj1);
    expect(obj2).toEqual({ a: 1, b: { c: 2, d: 3 }, e: { x: 42 }, f: 5 });

    expect(obj2.a).toBe(obj1.a);
    expect(obj2.b).toBe(obj1.b);
    expect(obj2.f).toBe(obj1.f);
  });

  test('is the equivalent of clone and set if the property is not on the original', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 };
    const obj2 = assoc('z', { x: 42 }, (obj1 as unknown) as any);
    expect(obj2).toEqual({ a: 1, b: { c: 2, d: 3 }, e: 4, f: 5, z: { x: 42 } });

    expect(obj2.a).toBe(obj1.a);
    expect(obj2.b).toBe(obj1.b);
    expect(obj2.f).toBe(obj1.f);
  });
});
