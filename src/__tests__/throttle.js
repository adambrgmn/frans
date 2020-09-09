import { throttle } from '../throttle';

describe('Core.throttle', () => {
  const delay = (wait) => new Promise((resolve) => setTimeout(resolve, wait));

  test('will throttle a function and only call it once within the given timeframe', () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 0);

    throttled('foo', 'bar');
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith('foo', 'bar');

    throttled('foo2', 'bar2');
    throttled('foo3', 'bar3');
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('throttled function can only be called once within given timeframe', async () => {
    const fn = jest.fn();
    const throttled = throttle(fn, 0);

    throttled(1);
    throttled(2);
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1);

    await delay(0);
    throttled(3);
    throttled(4);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith(3);
  });
});
