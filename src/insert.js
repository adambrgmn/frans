import slice from './slice';
import concat from './concat';

export default (pos, val, arr) => {
  const start = slice(0, pos, arr);
  const end = slice(pos, Infinity, arr);

  return concat(concat(start, [val]), end);
};
