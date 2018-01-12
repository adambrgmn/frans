import isNumber from './isNumber';

const range = (from, to) => {
  if (!isNumber(from) && !isNumber(to)) {
    throw new TypeError('Both arguments to range must be numbers');
  }

  if (from > to) return [];
  const l = to - from;

  const arr = Array(l);
  let i = 0;

  while (i + from < to) {
    arr[i] = i + from;
    i += 1;
  }

  return arr;
};

export { range as default };
