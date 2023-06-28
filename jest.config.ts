import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./",
});

export default createJestConfig({
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
});
