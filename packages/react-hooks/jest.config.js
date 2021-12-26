module.exports = {
  preset: 'ts-jest/presets/js-with-ts',
  clearMocks: true,
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/.history/'],
  modulePathIgnorePatterns: ['<rootDir>/package.json'],
  resetMocks: false,
  setupFiles: ['jest-localstorage-mock'],
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
};
