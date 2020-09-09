import { isString } from './isString';
import { isArray } from './isArray';

export function concat(a: string, b: string): string;
export function concat<T>(a: T[], b: T[]): T[];
export function concat<T>(a: T[] | string, b: T[] | string): T[] | string {
  if (isArray(a) && isArray(b)) {
    return [...a, ...b];
  }

  if (isString(a) && isString(b)) {
    return (a as string) + (b as string);
  }

  throw new TypeError('Both arguments must be of same type');
}
