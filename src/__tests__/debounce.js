import debounce from '../debounce';

describe('Core.debounce', () => {
  const delay = wait => new Promise(resolve => setTimeout(resolve, wait));

  test('will debounce a function', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 0);

    debounced('foo', 'bar');
    expect(fn).not.toHaveBeenCalled();
    await delay(0);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith('foo', 'bar');
  });

  test('will debounce a function and be called only once with the last called args', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 0);

    debounced('foo1', 'bar1');
    debounced('foo2', 'bar2');
    await delay(0);
    debounced('foo3', 'bar3');

    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith('foo2', 'bar2');

    await delay(0);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenCalledWith('foo3', 'bar3');
  });

  test('can be cleared to prevent calling', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 0);

    debounced('foo');
    debounced.clear();
    await delay(0);
    expect(fn).not.toHaveBeenCalled();
  });

  test('can be flushed to call function earlier', async () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 0);

    debounced('foo', 'bar');
    debounced.flush();
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith('foo', 'bar');

    await delay(10);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('clear and flush will have no observable result if function aint debounced', () => {
    const fn = jest.fn();
    const debounced = debounce(fn, 0);

    debounced.flush();
    expect(fn).not.toHaveBeenCalled();
    debounced.clear();
  });
});
