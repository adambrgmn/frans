import memoizeWithP from '../memoizeWithP';

describe('Core.memoizeWithP', () => {
  const memoP = memoizeWithP((...args) => args.join(''));

  test('memoizes an async functions result', async () => {
    const asyncGetArr = jest.fn(async (a, b) => [a, b]);
    const memGetArr = memoP(asyncGetArr);

    expect(await memGetArr(1, 2)).toBe(await memGetArr(1, 2));
    expect(asyncGetArr).toHaveBeenCalledTimes(1);
  });
});
