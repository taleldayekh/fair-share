module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  globalSetup: '<rootDir>/src/shared/testing/setup',
  globalTeardown: '<rootDir>/src/shared/testing/teardown',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/api/type-defs/*.ts'],
  coverageDirectory: './coverage/',
};
