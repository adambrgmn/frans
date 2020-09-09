import { add } from './add';
import { reduce } from './reduce';

const sum = (list) => reduce(add, 0, list);

export { sum };
