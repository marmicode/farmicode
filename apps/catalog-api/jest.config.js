module.exports = {
  preset: '../../jest.preset.js',
  coverageDirectory: '../../coverage/apps/catalog-api',
  globals: { 'ts-jest': { tsConfig: '<rootDir>/tsconfig.spec.json' } },
  displayName: 'catalog-api',
};
