export default fn => arr => {
  const ret = [];
  for (let i = 0; i < arr.length; i += 1) ret.push(fn(arr[i]));
  return ret;
};
