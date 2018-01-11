import pipeP from './pipeP';
import reverse from './reverse';

const composeP = (...fns) => pipeP(...reverse(fns));

export { composeP as default };
