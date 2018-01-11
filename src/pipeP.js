/* eslint-disable no-underscore-dangle */
import reduce from './reduce';

const _pipeP = (f, g) => async (...x) => f(...x).then(g);
const pipeP = (init, ...fns) => reduce(_pipeP, init, fns);

export { pipeP as default };
