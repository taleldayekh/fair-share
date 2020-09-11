module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['<rootDir>/src/**/*.spec.ts'],
  globalSetup: '<rootDir>/src/shared/testing/setUp.ts',
  globalTeardown: '<rootDir>/src/shared/testing/tearDown.ts',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts', '!src/api/type-defs/*.ts'],
  coverageDirectory: './coverage/',
  // coverageReporters: ['html']
};
