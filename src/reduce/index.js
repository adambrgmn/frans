// @flow

export default (fn: GenericFn, init: any) => (arr: Array<any>) => {
  let l = init;
  for (let i = 0; i < arr.length; i += 1) l = fn(l, arr[i]);
  return l;
};
