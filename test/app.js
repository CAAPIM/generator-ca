/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

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
