import { sort } from './sort';
import { subtract } from './subtract';
import { length } from './length';
import { divide } from './divide';
import { modulo } from './modulo';
import { nth } from './nth';
import { slice } from './slice';
import { mean } from './mean';

export function median(list: number[]): number {
  const sorted = sort(subtract, list);
  const l = length(sorted);
  const half = divide(l, 2);

  if (modulo(l, 2) > 0) return nth(Math.floor(half), sorted);

  const sub = slice(half - 1, half + 1, sorted);
  return mean(sub);
}
