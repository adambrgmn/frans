import reduceRight from '../reduceRight';

export default (...fns) => x => reduceRight((acc, fn) => fn(acc), x)(fns);
