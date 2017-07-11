// @flow
import reduceRight from '../reduceRight';

export default (...fns: Array<GenericFn>) => (x: any) =>
  reduceRight((acc: any, fn: GenericFn) => fn(acc), x)(fns);
