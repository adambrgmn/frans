/* eslint-disable valid-typeof */
import { type } from './type';

const is = (t, x) => type(x) === t;

export { is };
