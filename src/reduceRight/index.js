// @flow

export default (fn: GenericFn, init: any) => (arr: Array<any>) => {
  let l = init;
  for (let i = arr.length - 1; i >= 0; i--) l = fn(l, arr[i]);
  return l;
};
