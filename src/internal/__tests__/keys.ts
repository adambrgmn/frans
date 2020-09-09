import { keys } from '../keys';

describe('Internal.keys', () => {
  test('returns an array of an objects keys', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('does not include the given objects prototype props', () => {
    function Person() {
      // @ts-ignore
      this.age = 0;
    }

    Person.prototype.happyBirthday = function happyBirthday() {
      this.age += 1;
    };

    // @ts-ignore
    const bob = new Person();
    expect(keys(bob)).toEqual(['age']);
  });
});
