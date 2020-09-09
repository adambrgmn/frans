import { reduceBy } from './reduceBy';
import { append } from './append';

const groupBy = (keyFn, list) =>
  reduceBy((acc, val) => append(val, acc), [], keyFn, list);

export { groupBy };
