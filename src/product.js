import { reduce } from './reduce';
import { multiply } from './multiply';

const product = (list) => reduce(multiply, 1, list);

export { product };
