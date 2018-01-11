import sort from '../sort';

describe('Core.sort', () => {
  const sortFn = (a, b) => a - b;
  test('sorts the elements of a list', () => {
    expect(sort(sortFn, [3, 1, 8, 1, 2, 5])).toEqual([1, 1, 2, 3, 5, 8]);
  });

  test('does not affect the list passed supplied', () => {
    const list = [3, 1, 8, 1, 2, 5];
    expect(sort(sortFn, list)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(list).toEqual([3, 1, 8, 1, 2, 5]);
  });

  test('works with arguments', () => {
    function getArgs() {
      return arguments; // eslint-disable-line prefer-rest-params
    }

    expect(sort(sortFn, getArgs(3, 1, 8, 1, 2, 5))).toEqual([1, 1, 2, 3, 5, 8]);
  });
});
