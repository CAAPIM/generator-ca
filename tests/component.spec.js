/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');
const validate = require('../generators/component/validate');

describe('generator-ca:component', () => {
  it('creates files', () =>
    helpers.run(path.join(__dirname, '../generators/component')).withPrompts({
      componentName: 'TestComponent',
      description: 'Some description',
    }).then(() => {
      assert.file([
        '.github/PULL_REQUEST_TEMPLATE.md',
        '.storybook/config.js',
        '.storybook/head.html',
        'src/TestComponent/index.js',
        'src/TestComponent/index.stories.js',
        'src/TestComponent/index.spec.js',
        'src/TestComponent/index.theme.js',
        'src/index.js',
        'tests/index.spec.js',
        'tests/storyshots.spec.js',
        '.babelrc',
        '.codecov.yml',
        '.editorconfig',
        '.eslintignore',
        '.eslintrc',
        '.flowconfig',
        '.gitignore',
        '.gitattributes',
        '.npmignore',
        '.travis.yml',
        'CONTRIBUTING.md',
        'GUIDELINES.md',
        'LICENSE',
        'LICENSE.md',
        'package.json',
        'README.md',
      ]);
    }),
  );

  it('will only accept capitalized CamelCase component names', () => {
    expect(validate.componentName('test-component'))
      .toBe('The component name must be capitalized CamelCase.');

    expect(validate.componentName('testComponent'))
      .toBe('The component name must be capitalized CamelCase.');

    expect(validate.componentName('TestComponent'))
      .toBe(true);
  });

  it('will require a description', () => {
    expect(validate.description(null))
      .toBe('Please write a few words to describe what the component does.');

    expect(validate.description(''))
      .toBe('Please write a few words to describe what the component does.');

    expect(validate.description('test'))
      .toBe(true);
  });
});
