import { add } from './add';
import { reduce } from './reduce';

export function sum(list: number[]) {
  return reduce(add, 0, list);
}
