import findIndex from './findIndex';
import nth from './nth';

export default (predicateFn, arr) => {
  const idx = findIndex(predicateFn, arr);
  return idx > -1 ? nth(idx, arr) : undefined;
};
