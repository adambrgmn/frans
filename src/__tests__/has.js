import { has } from '../has';

describe('Core.has', () => {
  const fred = { name: 'Fred', age: 23 };
  const anon = { age: 99 };

  test('returns true if the specified property is present', () => {
    expect(has('name', fred)).toBeTruthy();
  });

  test('returns false if the specified property is absent', () => {
    expect(has('name', anon)).toBeFalsy();
  });

  test('does not check properties from the prototype chain', () => {
    class Person {
      constructor() {
        this.personAge = 0;
      }

      get age() {
        return this.personAge;
      }
    }

    const bob = new Person();
    expect(has('age', bob)).toBeFalsy();
  });
});
