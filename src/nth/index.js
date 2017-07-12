// @flow

export default (n: number) => (
  arr: Array<any> | string,
): Array<any> | string => {
  const index = n < 0 ? arr.length + n : n;
  return typeof arr === 'string' ? arr.charAt(index) : arr[index];
};
