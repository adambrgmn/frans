import reduceRight from './reduceRight';
import pipe from './pipe';
import isArray from './isArray';
import append from './append';

export default arr => {
  const reverseArray = list => reduceRight((a, e) => append(e, a), [], list);
  const reverseString = pipe(s => s.split(''), reverseArray, a => a.join(''));

  if (isArray(arr)) return reverseArray(arr);
  return reverseString(arr);
};
