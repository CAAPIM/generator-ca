/**
 * Copyright (c) 2016 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

'use strict';

var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    var done = this.async();

    this.log(yosay(
      'Welcome to the ' + chalk.red('CA Component') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'componentName',
      message: 'What would you like to name your component?',
      default: 'MyComponent'
    }];

    return this.prompt(prompts).then(function (props) {
      this.props = props;

      this.props.packageName = props.componentName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      this.props.portNumber = props.portNumber;
      this.props.componentName = props.componentName;

      done();
    }.bind(this));
  },

  paths: function () {
    this.destinationRoot(`./${this.props.packageName}`);
  },

  writing: function () {
    this.fs.copy(this.templatePath('gitignore'), this.destinationPath('.gitignore'));
    this.fs.copy(this.templatePath('npmignore'), this.destinationPath('.npmignore'));
    this.fs.copy(this.templatePath('.flowconfig'), this.destinationPath('.flowconfig'));
    this.fs.copy(this.templatePath('.babelrc'), this.destinationPath('.babelrc'));
    this.fs.copy(this.templatePath('.editorconfig'), this.destinationPath('.editorconfig'));
    this.fs.copy(this.templatePath('.eslintrc'), this.destinationPath('.eslintrc'));
    this.fs.copy(this.templatePath('.eslintignore'), this.destinationPath('.eslintignore'));
    this.fs.copy(this.templatePath('.travis.yml'), this.destinationPath('.travis.yml'));
    this.fs.copy(this.templatePath('LICENSE'), this.destinationPath('LICENSE'));
    this.fs.copy(this.templatePath('LICENSE.md'), this.destinationPath('LICENSE.md'));
    this.fs.copy(this.templatePath('CHANGELOG.md'), this.destinationPath('CHANGELOG.md'));
    this.fs.copy(this.templatePath('tools/*'), this.destinationPath('tools'));

    this.fs.copyTpl(
      this.templatePath('.storybook/**/*'),
      this.destinationPath('.storybook'), {
        componentName: this.props.componentName
      });

    this.fs.copyTpl(
      this.templatePath('.github/**/*'),
      this.destinationPath('.github'), {
        componentName: this.props.componentName,
        packageName: this.props.packageName,
        currentYear: new Date().getFullYear()
      });

    this.fs.copyTpl(
      this.templatePath('flow-typed/**/*'),
      this.destinationPath('flow-typed'));

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'), {
        componentName: this.props.componentName,
        packageName: this.props.packageName
      });

    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'), {
        componentName: this.props.componentName,
        packageName: this.props.packageName
      });

    this.fs.copyTpl(
      this.templatePath('CONTRIBUTING.md'),
      this.destinationPath('CONTRIBUTING.md'), {
        componentName: this.props.componentName,
        packageName: this.props.packageName
      });

    this.fs.copyTpl(
      this.templatePath('GUIDELINES.md'),
      this.destinationPath('GUIDELINES.md'), {
        componentName: this.props.componentName,
        packageName: this.props.packageName
      });

    this.fs.copyTpl(
      this.templatePath('src/component.js'),
      this.destinationPath(`src/${this.props.componentName}.js`), {
        componentName: this.props.componentName
      });

    this.fs.copyTpl(
      this.templatePath('src/component.spec.js'),
      this.destinationPath(`src/${this.props.componentName}.spec.js`), {
        componentName: this.props.componentName
      });

    this.fs.copyTpl(
      this.templatePath('src/component.stories.js'),
      this.destinationPath(`src/${this.props.componentName}.stories.js`), {
        componentName: this.props.componentName
      });

    this.fs.copyTpl(
      this.templatePath('src/component.theme.js'),
      this.destinationPath(`src/${this.props.componentName}.theme.js`), {
        componentName: this.props.componentName
      });
  },

  install: function () {
    this.installDependencies({bower: false});
  }
});
