import { map } from './map';
import { prop } from './prop';

const pluck = (val, arr) => map((x) => prop(val, x), arr);

export { pluck };
