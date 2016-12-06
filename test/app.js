'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ca:component', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/component'))
      .withPrompts({
        componentName: 'test',
        portNumber: 3001
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      '.gitignore'
    ]);
  });
});
