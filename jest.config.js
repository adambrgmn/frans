const conf = require('frans-scripts/jest');

module.exports = Object.assign(conf, {
  coveragePathIgnorePatterns: [
    ...conf.coveragePathIgnorePatterns,
    '<rootDir>/src/index.js',
  ],
});
