type PredicateFn<T> = (...args: T[]) => boolean;

export function both<T>(a: PredicateFn<T>, b: PredicateFn<T>) {
  return (...args: T[]) => a(...args) && b(...args);
}
