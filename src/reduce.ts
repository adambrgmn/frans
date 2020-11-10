import { length } from './length';

export function reduce<I, T>(fn: (acc: T, item: I) => T, init: T, arr: I[]): T {
  let idx = 0;
  let accumulator = init;
  const len = length(arr);

  while (idx < len) {
    accumulator = fn(accumulator, arr[idx]);
    idx += 1;
  }

  return accumulator;
}
