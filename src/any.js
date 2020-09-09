import { length } from './length';

const any = (fn, list) => {
  const l = length(list);
  let i = 0;
  let ret = false;

  while (!ret) {
    if (i >= l) break;

    ret = fn(list[i]);
    i += 1;
  }

  return ret;
};

export { any };
