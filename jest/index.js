/** @type {import('jest').Config} */
module.exports = {
    preset: 'ts-jest/presets/js-with-babel',
    maxWorkers: 4,
    testEnvironment: 'jsdom',
    cacheDirectory: '<rootDir>/.cache/jest',
    clearMocks: true,
    moduleFileExtensions: ['cjs', 'mjs', 'js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        // '\\.(css|pcss|sass|scss)$': require.resolve('identity-obj-proxy'),
    },
    testMatch: ['<rootDir>/src/**/__tests__/**/*.(spec|test).{ts,tsx}'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/(?!@docusaurus)'],
};

// transformIgnorePatterns: []
