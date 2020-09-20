module.exports = {
  roots: ["<rootDir>"],
  testPathIgnorePatterns: [
    '/dist/',
  ],
  testRegex: '(__test__/.*|(\\.|/)(test|spec))\\.ts$',
  transform: {
    "^.+\\.(ts)$": "ts-jest",
  },
};
