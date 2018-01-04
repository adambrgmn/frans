export default n => arr => {
  const index = n < 0 ? arr.length + n : n;
  return typeof arr === 'string' ? arr.charAt(index) : arr[index];
};
