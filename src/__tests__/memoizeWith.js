import memoizeWith from '../memoizeWith';

describe('Core.memoizeWith', () => {
  const memo = memoizeWith((...args) => args.join(''));

  test('Creates a memoization function', () => {
    const greet = jest.fn((name) => `Hello, ${name}!`);
    const greetMemoized = memo(greet);

    greetMemoized();
    greetMemoized();

    expect(greet).toHaveBeenCalledTimes(1);
  });

  test('Saves result the first time and returns it', () => {
    const getArr = memo((a, b) => [a, b]);
    expect(getArr(1, 2)).toBe(getArr(1, 2));
  });
});
