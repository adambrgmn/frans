import append from '../append';

describe('Core.append', () => {
  test('adds the element to the end of the list', () => {
    expect(append('z', ['x', 'y'])).toEqual(['x', 'y', 'z']);
    expect(append(['a', 'z'], ['x', 'y'])).toEqual(['x', 'y', ['a', 'z']]);
  });

  test('works on empty list', () => {
    expect(append(1, [])).toEqual([1]);
  });
});
