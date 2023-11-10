const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ["@testing-library/jest-dom", "./src/test/jest.setup.ts"],
  moduleNameMapper: {'^@/(.*)$': '<rootDir>/src/$1'},
};

module.exports = createJestConfig(customJestConfig);