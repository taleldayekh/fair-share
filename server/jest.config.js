module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  globalSetup: '<rootDir>/src/testing/setUp.ts',
  // globalTeardown: '<rootDir>/src/testing/tearDown.ts',
};
