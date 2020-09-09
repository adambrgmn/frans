export function comparator<T>(fn: (a: T, b: T) => boolean) {
  return (a: T, b: T) => {
    return fn(a, b) ? -1 : fn(b, a) ? 1 : 0;
  };
}
