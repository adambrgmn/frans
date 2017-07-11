// @flow

export default (...fns: Array<GenericFn>) => (x: any) =>
  fns.reduceRight((acc: any, fn: GenericFn) => fn(acc), x);
