import reduceRight from './reduceRight';
import pipe from './pipe';
import isArray from './isArray';

export default arr => {
  const reverseArray = reduceRight((a, e) => a.concat(e), []);
  const reverseString = pipe(s => s.split(''), reverseArray, a => a.join(''));

  if (isArray(arr)) return reverseArray(arr);
  return reverseString(arr);
};
