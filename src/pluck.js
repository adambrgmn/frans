import map from './map';
import prop from './prop';

export default (val, arr) => map(x => prop(val, x), arr);
