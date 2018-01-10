const clamp = (min, max, n) => {
  if (min > max)
    throw new Error(
      `min (${min}) must be greater than max (${max}) in clamp(min, max, val)`,
    );

  if (n < min) return min;
  if (n > max) return max;
  return n;
};

export { clamp as default };
