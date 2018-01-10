import length from './length';
import divide from './divide';
import modulo from './modulo';
import nth from './nth';
import slice from './slice';
import mean from './mean';

const median = list => {
  const sorted = Array.prototype.sort.call(list, (a, b) => {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
  });

  const l = length(sorted);
  const half = divide(l, 2);

  if (modulo(l, 2) > 0) return nth(Math.floor(half), sorted);

  const sub = slice(half - 1, half + 1, sorted);
  return mean(sub);
};

export { median as default };
