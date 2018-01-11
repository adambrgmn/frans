import pipe from './pipe';
import reverse from './reverse';

const compose = (...fns) => pipe(...reverse(fns));

export { compose as default };
