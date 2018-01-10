import reduceRight from './reduceRight';

const compose = (...fns) => x => reduceRight((acc, fn) => fn(acc), x, fns);

export { compose as default };
