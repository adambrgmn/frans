import reduceRight from './reduceRight';
import pipe from './pipe';
import isArray from './isArray';

const reverseArray = reduceRight((a, e) => a.concat(e), []);
const reverseString = pipe(s => s.split(''), reverseArray, a => a.join(''));

export default arr => {
  if (isArray(arr)) return reverseArray(arr);
  return reverseString(arr);
};
