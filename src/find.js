import { findIndex } from './findIndex';
import { nth } from './nth';

const find = (predicateFn, arr) => {
  const idx = findIndex(predicateFn, arr);
  return idx > -1 ? nth(idx, arr) : undefined;
};

export { find };
