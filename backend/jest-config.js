module.exports = {
  moduleFileExtensions: ["js", "json", "ts"],
  testRegex: "\\.test\\.ts$",
  transform: {
    "^.+\\.ts$": "ts-jest",
  },
  collectCoverageFrom: ["**/*.ts"],
  moduleNameMapper: {
    "src(.*)$": "<rootDir>/src/$1",
  },
  testPathIgnorePatterns: ["/node_modules/", "/dist/"],
  coverageDirectory: "./.coverage",
  coveragePathIgnorePatterns: ["/node_modules/", "/dist/"],
  testEnvironment: "node",
  globalSetup: "<rootDir>/jest-setup.ts",
};
