import reduceBy from './reduceBy';
import inc from './inc';

const countBy = (keyFn, list) => reduceBy(inc, 0, keyFn, list);

export { countBy as default };
