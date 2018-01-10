import remove from '../remove';

describe('Core.remove', () => {
  test('splices out a sub-list of the given list', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    expect(remove(2, 5, list)).toEqual(['a', 'b', 'h', 'i', 'j']);
  });

  test('returns the appropriate sublist when start == 0', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    expect(remove(0, 5, list)).toEqual(['f', 'g', 'h', 'i', 'j']);
    expect(remove(0, 1, list)).toEqual([
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
    ]);
    expect(remove(0, list.length, list)).toEqual([]);
  });

  test('removes the end of the list if the count is too large', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    expect(remove(2, 20, list)).toEqual(['a', 'b']);
  });

  test('retains the entire list if the start is too large', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    expect(remove(13, 3, list)).toEqual([
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
    ]);
  });

  test('works with arguments', () => {
    function getArgs() {
      return arguments; // eslint-disable-line prefer-rest-params
    }

    expect(
      remove(2, 5, getArgs('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j')),
    ).toEqual(['a', 'b', 'h', 'i', 'j']);
  });
});
