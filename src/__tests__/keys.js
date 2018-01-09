import { keys } from '../';
import { _keys } from '../keys';

describe('Core.keys', () => {
  test('returns an array of an objects keys', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('does not include the given objects prototype props', () => {
    class Person {
      constructor() {
        this.age = 0;
      }

      happyBirthday() {
        this.age += 1;
      }
    }

    const bob = new Person();
    expect(keys(bob)).toEqual(['age']);
  });
});

describe('Internal._keys', () => {
  test('returns an array of an objects keys', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('does not include the given objects prototype props', () => {
    class Person {
      constructor() {
        this.age = 0;
      }

      happyBirthday() {
        this.age += 1;
      }
    }

    const bob = new Person();
    expect(_keys(bob)).toEqual(['age']);
  });
});
