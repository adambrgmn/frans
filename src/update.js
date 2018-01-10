import adjust from './adjust';
import always from './always';

const update = (idx, val, arr) => adjust(idx, always(val), arr);

export { update as default };
