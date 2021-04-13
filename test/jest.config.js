module.export = {
  verbose: true,
  preset: "ts-jest",
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testPathDirs: ['<rootDir>/src/']
}

