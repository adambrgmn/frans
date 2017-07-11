// @flow

export default (fn: GenericFn, init: any) => (arr: Array<any>) =>
  arr.reduce(fn, init);
