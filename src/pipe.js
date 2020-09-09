/* eslint-disable no-underscore-dangle */

import { reduce } from './reduce';

const _pipe = (f, g) => (x) => g(f(x));
const pipe = (init, ...fns) => reduce(_pipe, init, fns);

export { pipe };
