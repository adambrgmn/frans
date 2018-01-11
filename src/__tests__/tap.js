import tap from '../tap';
import { pipe } from '../';

describe('Core.tap', () => {
  test('calls the function provided, skipping its output', () => {
    const add1 = x => x + 1;
    const tapFn = jest.fn(add1);
    const testFn = pipe(add1, tap(tapFn));

    expect(testFn(1)).toBe(2);
    expect(tapFn).toHaveBeenCalled();
  });
});
