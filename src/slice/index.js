// @flow
import nth from '../nth';

export default (s: number, e?: number) => (arr: Array<any>): Array<any> => {
  const newArr = [];
  const start = s < 0 ? arr.length + s : s;
  const end = e && e < 0 ? arr.length + e : e || arr.length;

  for (let i = start; i < (end || arr.length); i += 1) newArr.push(nth(i)(arr));
  return newArr;
};
