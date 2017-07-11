// @flow

export default (fn: GenericFn) => (arr: Array<any>) => {
  const ret = [];
  for (let i = 0; i < arr.length; i += 1) ret.push(fn(arr[i]));
  return ret;
};
