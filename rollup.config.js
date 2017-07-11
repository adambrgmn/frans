import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const commonPlugins = () => [
  commonjs(),
  resolve(),
  babel({ exclude: 'node_modules/**' }),
];

export default [
  {
    entry: 'src/main.js',
    dest: 'build/index.js',
    moduleName: 'Frans',
    format: 'cjs',
    plugins: commonPlugins(),
  },
  {
    entry: 'src/main.js',
    dest: 'build/frans.js',
    moduleName: 'Frans',
    format: 'iife',
    plugins: commonPlugins(),
  },
];
