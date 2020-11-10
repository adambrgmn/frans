import { isString } from './isString';

export function slice(start: number, end: number, arr: string): string;
export function slice<T>(start: number, end: number, arr: T[]): T[];
export function slice<T>(
  start: number,
  end: number,
  arr: T[] | string,
): T[] | string {
  if (isString(arr)) {
    return String.prototype.slice.call(arr, start, end);
  }
  return Array.prototype.slice.call(arr, start, end);
}
