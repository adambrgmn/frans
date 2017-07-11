// @flow
import reduce from '../reduce';

export default (...fns: Array<GenericFn>) => (x: any) =>
  reduce((acc, fn) => fn(acc), x)(fns);
