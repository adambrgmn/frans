import { any } from '../any';

describe('Core.any', () => {
  const odd = (n: number) => n % 2 === 1;
  const T = () => true;

  test('returns true if any element satisfies the predicate', () => {
    expect(any(odd, [2, 4, 6, 8, 10, 11, 12])).toBeTruthy();
  });

  test('returns false if all elements fails to satisfy the predicate', () => {
    expect(any(odd, [2, 4, 6, 8, 10, 12])).toBeFalsy();
  });

  test('works with more complex objects', () => {
    const alliterative = (p: any) => p.first.charAt(0) === p.last.charAt(0);
    const people = [
      { first: 'Paul', last: 'Grenier' },
      { first: 'Mike', last: 'Hurley' },
      { first: 'Will', last: 'Klein' },
    ];

    expect(any(alliterative, people)).toBeFalsy();

    people.push({ first: 'Scott', last: 'Sauyet' });
    expect(any(alliterative, people)).toBeTruthy();
  });

  test('can use a configurable function', () => {
    const atLeast = (age: number) => (p: { age: number }) => p.age >= age;
    const teens = [
      { name: 'Alice', age: 14 },
      { name: 'Betty', age: 18 },
      { name: 'Cindy', age: 17 },
    ];

    expect(any(atLeast(16), teens)).toBeTruthy();
    expect(any(atLeast(21), teens)).toBeFalsy();
  });

  test('returns false for an empty list', () => {
    expect(any(T, [])).toBeFalsy();
  });
});
