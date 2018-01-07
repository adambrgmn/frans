import reduce from './reduce';
import append from './append';

export default (fn, arr) =>
  reduce((a, e) => (fn(e) ? append(e, a) : a), [], arr);
