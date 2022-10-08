const configs = {
  preset: 'react-native',
  // setupFilesAfterEnv: ['../jest.setup.js'],
  maxWorkers: 1,
  testEnvironment: './environment',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  testRegex: '\\.e2e\\.[t|j]s$',
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
};

module.exports = configs;
