// @flow
export default (...fns: Array<(x: any) => any>) => (x: any) =>
  fns.reduce((acc, fn) => fn(acc), x);
