const sort = (fn, list) => {
  const arr = [...list];
  return arr.sort(fn);
};

export { sort };
