const tap = (fn) => (x) => {
  fn(x);
  return x;
};

export { tap };
