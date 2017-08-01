// @flow

export default (predicateFn: (x: any) => boolean) => (arr: Array<any>) => {
  let i = 0;
  const len = arr.length;

  while (i < len) {
    const val = arr[i];
    if (predicateFn(val)) return val;
    i += 1;
  }

  return undefined;
};