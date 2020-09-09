import { keys } from '../keys';

describe('Core.keys', () => {
  test('returns an array of an objects keys', () => {
    expect(keys({ a: 1, b: 2 })).toEqual(['a', 'b']);
  });

  test('does not include the given objects prototype props', () => {
    function Person() {
      this.age = 0;
    }

    Person.prototype.happyBirthday = function happyBirthday() {
      this.age += 1;
    };

    const bob = new Person();
    expect(keys(bob)).toEqual(['age']);
  });

  test('returns an empty array for nil or non object', () => {
    expect(keys(null)).toEqual([]);
    expect(keys([])).toEqual([]);
    expect(keys('foo')).toEqual([]);
    expect(keys(123)).toEqual([]);
  });
});
