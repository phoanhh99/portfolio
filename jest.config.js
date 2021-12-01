const nextJest = require('next/jest')
const createJestConfig = nextJest({__dirname})
const customJestConfig = {
  setupFilesAfterEnc: [`<rootDir>/jest.setup.js`],
}

module.exports = createJestConfig(customJestConfig)
