import adjust from './adjust';
import always from './always';

export default (idx, val, arr) => adjust(always(val), idx, arr);
