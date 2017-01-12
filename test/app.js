/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-ca:component', () => {
  before(() =>
    helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({
        componentName: 'TestComponent',
      })
      .toPromise()
  );

  it('creates files', () => {
    assert.file([
      '.github/PULL_REQUEST_TEMPLATE.md',
      '.storybook/config.js',
      '.storybook/head.html',
      '.storybook/webpack.config.js',
      'src/TestComponent.js',
      'src/TestComponent.stories.js',
      'src/TestComponent.theme.js',
      'tests/.eslintrc',
      'tests/TestComponent.spec.js',
      '.babelrc',
      '.codecov.yml',
      '.editorconfig',
      '.eslintignore',
      '.eslintrc',
      '.flowconfig',
      '.gitignore',
      '.npmignore',
      '.travis.yml',
      'CHANGELOG.md',
      'CONTRIBUTING.md',
      'GUIDELINES.md',
      'LICENSE',
      'LICENSE.md',
      'package.json',
      'README.md',
    ]);
  });
});
