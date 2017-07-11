// @flow

type Fn = (x: any) => any;
export default (...fns: Array<Fn>) => (x: any) =>
  fns.reduceRight((acc: any, fn: Fn) => fn(acc), x);
