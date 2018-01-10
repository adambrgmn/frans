/* eslint-disable import/no-extraneous-dependencies, no-console, global-require */
const { Suite } = require('benchmark');
const chalk = require('chalk');
const ora = require('ora');

/**
 * Setup benches and return an array containing another array with first item
 * being the name and the other the function to benchmark.
 */
function setup() {
  const { reduce } = require('../dist/frans.cjs');
  const list = ['a', 'b', 'c', 'd'];
  const accFn = (acc, char) => `${acc} - ${char}`;

  return [
    ['reduce.native', () => list.reduce(accFn, '')],
    ['reduce.local', () => reduce(accFn, '', list)],
  ];
}

/**
 * Do not touch
 */

const spinner = ora('Running benchmarks');
const suite = new Suite('reduce', {
  onStart() {
    spinner.start();
  },
  onCycle(e) {
    spinner.text = `${e.target}`;
    spinner.succeed();
  },
  onComplete() {
    const fastest = this.filter('fastest').map('name');
    spinner.start();
    spinner.text = `Fastest is ${chalk.green(fastest)}`;
    spinner.succeed();
  },
});

setup().map(([name, fn]) =>
  suite.add(name, fn, {
    onStart() {
      spinner.text = `Running ${chalk.blue(name)}`;
      spinner.start();
    },
  }),
);
suite.run({ async: true });
