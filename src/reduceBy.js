import { reduce } from './reduce';
import { has } from './has';
import { assoc } from './assoc';

const reduceBy = (valFn, valAcc, keyFn, list) =>
  reduce(
    (acc, item) => {
      const key = keyFn(item);
      const val = valFn(has(key, acc) ? acc[key] : valAcc, item);
      return assoc(key, val, acc);
    },
    {},
    list,
  );

export { reduceBy };
