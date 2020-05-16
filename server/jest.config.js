module.exports = {
  preset: 'ts-jest',
  globalSetup: '<rootDir>/src/testing/setUp.ts',
  globalTeardown: '<rootDir>/src/testing/tearDown.ts',
};
