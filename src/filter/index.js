// @flow
import reduce from '../reduce';

export default (fn: (x: any) => boolean) =>
  reduce((a, e) => (fn(e) ? a.concat(e) : a), []);
