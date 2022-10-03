module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['../jest.setup.js'],
  maxWorkers: 1,
  testEnvironment: './environment',
  testRunner: 'jest-circus/runner',
  testTimeout: 120000,
  testRegex: '\\.e2e\\.js$',
  reporters: ['detox/runners/jest/streamlineReporter'],
  verbose: true,
  transform: {
    '^.+\\.jsx$': 'babel-jest',
    '^.+\\.tsx?$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.spec.json',
        babelConfig: true,
      },
    ],
  },
  transformIgnorePatterns: [],
  // transformIgnorePatterns: ['/node_modules/(?!(@react-native|react-native)).|)}>#'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
};
