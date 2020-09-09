const remove = (start, end, list) => {
  const res = [...list];
  res.splice(start, end);
  return res;
};

export { remove };
