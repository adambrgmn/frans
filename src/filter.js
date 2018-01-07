import reduce from './reduce';

export default (fn, arr) =>
  reduce((a, e) => (fn(e) ? a.concat(e) : a), [], arr);
