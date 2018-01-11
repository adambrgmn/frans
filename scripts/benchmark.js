/* eslint-disable */
const { Suite } = require('benchmark');
const chalk = require('chalk');
const ora = require('ora');

/**
 * Setup benches and return an array containing another array with first item
 * being the name and the other the function to benchmark.
 */
function setup() {
  const { add } = require('../dist');

  return [
    ['add.native', () => 1000 + 1010],
    ['add.current', () => add(1000, 1010)],
  ];
}

/**
 * Do not touch
 */

const spinner = ora('Running benchmarks');
const suite = new Suite('benchmark', {
  onStart() {
    spinner.start();
  },
  onCycle(e) {
    spinner.text = `${e.target}`;
    spinner.succeed();
  },
  onError(e) {
    spinner.text = e.target.error.message;
    spinner.fail();
    console.error(e.target.error);
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
