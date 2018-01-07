export default (fn, init, arr) => {
  let l = init;
  for (let i = 0; i < arr.length; i++) l = fn(l, arr[i]);
  return l;
};
