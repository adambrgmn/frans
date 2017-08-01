// @flow
import findIndex from '../findIndex';
import nth from '../nth';

export default (predicateFn: (x: any) => boolean) => (arr: Array<any>) => {
  const idx = findIndex(predicateFn)(arr);
  return idx > -1 ? nth(idx)(arr) : undefined;
};
