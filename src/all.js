import { length } from './length';

const all = (fn, list) => {
  const l = length(list);
  let i = 0;
  let ret = true;

  while (ret) {
    if (i >= l) break;

    ret = fn(list[i]);
    i += 1;
  }

  return ret;
};

export { all };
