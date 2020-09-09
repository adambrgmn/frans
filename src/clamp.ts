export function clamp(min: number, max: number, n: number): number {
  if (min > max) {
    throw new Error(
      `min (${min}) must be greater than max (${max}) in clamp(min, max, val)`,
    );
  }

  return Math.max(min, Math.min(max, n));
}
