import { prepend } from '../';

describe('Core.prepend', () => {
  test('adds the element to the beginning of the list', () => {
    expect(prepend('z', ['x', 'y'])).toEqual(['z', 'x', 'y']);
    expect(prepend(['a', 'z'], ['x', 'y'])).toEqual([['a', 'z'], 'x', 'y']);
  });

  test('works on empty list', () => {
    expect(prepend(1, [])).toEqual([1]);
  });
});
