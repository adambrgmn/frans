import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const commonPlugins = () => [
  commonjs(),
  resolve(),
  babel({ exclude: 'node_modules/**' }),
];

const commonSettings = {
  entry: 'src/main.js',
  moduleName: 'Frans',
};

export default [
  Object.assign({}, commonSettings, {
    dest: 'build/index.js',
    format: 'cjs',
    plugins: commonPlugins(),
  }),
  Object.assign({}, commonSettings, {
    dest: 'build/frans.js',
    format: 'iife',
    plugins: commonPlugins(),
  }),
];
