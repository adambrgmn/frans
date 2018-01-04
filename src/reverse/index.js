import reduceRight from '../reduceRight';
import pipe from '../pipe';

const reverseArray = reduceRight((a, e) => a.concat(e), []);
const reverseString = pipe(s => s.split(''), reverseArray, a => a.join(''));

export default arr => {
  if (Array.isArray(arr)) return reverseArray(arr);
  return reverseString(arr);
};
