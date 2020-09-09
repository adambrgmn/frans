import { length } from './length';

export function any<T>(fn: (item: T) => boolean, list: T[]): boolean {
  const l = length(list);
  let i = 0;
  let ret = false;

  while (!ret) {
    if (i >= l) break;

    ret = fn(list[i]);
    i += 1;
  }

  return ret;
}
