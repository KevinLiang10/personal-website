module.exports = {
    preset: "ts-jest",
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    clearMocks: true,
    injectGlobals: false,
    collectCoverage: true,
    coverageReporters: process.env.CI ? ["text", "lcov"] : ["text"],
    coverageThreshold: {
      global: {
        branches: 100,
        functions: 100,
        lines: 100,
        statements: 100,
      },
    },
  };