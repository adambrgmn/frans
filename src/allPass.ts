type PredicateFn<T> = (...args: T[]) => boolean;

export function allPass<T>(predicateList: PredicateFn<T>[], ...args: T[]) {
  const { length } = predicateList;
  let i = 0;
  let ret = true;

  while (ret) {
    if (i >= length) break;

    ret = predicateList[i](...args);
    i += 1;
  }

  return ret;
}
