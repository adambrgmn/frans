import { PredicateFn } from './internal/types';

export function complement<T>(fn: PredicateFn<T>) {
  return (...args: T[]) => !fn(...args);
}
