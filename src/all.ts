import { length } from './length';

function all<T>(fn: (item: T) => boolean, list: ArrayLike<T>): boolean {
  const l = length(list);
  let i = 0;
  let ret = true;

  while (ret) {
    if (i >= l) break;

    ret = fn(list[i]);
    i += 1;
  }

  return ret;
}

export { all };
