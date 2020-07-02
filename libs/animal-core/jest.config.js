module.exports = {
  name: 'animal-core',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/animal-core',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
