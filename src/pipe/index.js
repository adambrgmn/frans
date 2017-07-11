// @flow
export default (...fns: Array<GenericFn>) => (x: any) =>
  fns.reduce((acc, fn) => fn(acc), x);
