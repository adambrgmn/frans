import { sum } from './sum';
import { divide } from './divide';
import { length } from './length';

const mean = (list) => {
  const l = length(list);
  const s = sum(list);
  return divide(s, l);
};

export { mean };
