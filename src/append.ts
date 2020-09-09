import { concat } from './concat';

export function append<T>(el: T, list: T[]): T[] {
  return concat(list, [el]);
}
