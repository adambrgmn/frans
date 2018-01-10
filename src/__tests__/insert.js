import insert from '../insert';

describe('Core.insert', () => {
  test('inserts an element into the given list', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    expect(insert(2, 'x', list)).toEqual(['a', 'b', 'x', 'c', 'd', 'e']);
  });

  test('inserts another list as an element', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    expect(insert(2, ['s', 't'], list)).toEqual([
      'a',
      'b',
      ['s', 't'],
      'c',
      'd',
      'e',
    ]);
  });

  test('appends to the end of the list if the index is too large', () => {
    const list = ['a', 'b', 'c', 'd', 'e'];
    expect(insert(8, 'z', list)).toEqual(['a', 'b', 'c', 'd', 'e', 'z']);
  });

  test('inserts in to array, even if empty array', () => {
    expect(insert(2, 'x', [])).toEqual(['x']);
  });
});
