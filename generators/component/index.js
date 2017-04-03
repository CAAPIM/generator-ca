/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const camelCase = require('lodash/camelCase');
const capitalize = require('lodash/capitalize');
const forEach = require('lodash/forEach');
const parseGitHubUrl = require('parse-github-url');

module.exports = class extends Generator {
  prompting() {
    this.props = {};
    const done = this.async();

    this.log(yosay(`Welcome to the ${chalk.red('CA Component')} generator!`));

    return this.prompt([
      {
        type: 'input',
        name: 'componentName',
        message: 'What would you like to name your component?',
        default: 'ComponentName',
        validate: (value) => {
          const camelCaseValue = camelCase(capitalize(value));
          if (value === camelCaseValue) {
            return 'The component name must be capitalized CamelCase.';
          }
          return true;
        },
      },
    ]).then((props) => {
      this.props.componentName = props.componentName;
      this.props.repoName = `CA-UI-${props.componentName}`;

      return this.prompt([
        {
          type: 'input',
          name: 'repoUrl',
          message: 'Where will the component be published?',
          default: `https://github.com/CAAPIM/${this.props.repoName}`,
        },
        {
          type: 'input',
          name: 'packageName',
          message: 'What would you like to name the NPM package?',
          default: this.props.repoName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase(),
        },
        {
          type: 'input',
          name: 'description',
          message: 'What does your component do?',
          required: true,
          validate: (value) => {
            if (!value || value === '') {
              return 'Please write a few words to describe what the component does.';
            }
            return true;
          },
        },
        {
          type: 'list',
          name: 'componentType',
          message: 'What type of component would you like to create?',
          choices: ['class', 'function'],
          default: 'class',
        },
      ]).then((props2) => {
        this.props.packageName = props2.packageName;
        this.props.repoUrl = props2.repoUrl;
        this.props.description = props2.description;
        this.props.componentType = props2.componentType;

        // parse GitHub URL
        this.props.repo = parseGitHubUrl(this.props.repoUrl);

        return this.prompt([
          {
            type: 'input',
            name: 'confirm',
            message: 'Does this look good?',
            default: 'yes',
          },
        ]).then((props3) => {
          if (props3.confirm === 'yes') {
            done();
          } else {
            process.exit();
          }
        });
      });
    });
  }

  paths() {
    this.destinationRoot(`./${this.props.repo.name}`);
  }

  writing() {
    const templates = {
      // dotfiles
      gitignore: '.gitignore',
      npmignore: '.npmignore',
      flowconfig: '.flowconfig',
      babelrc: '.babelrc',
      editorconfig: '.editorconfig',
      eslintrc: '.eslintrc',
      eslintignore: '.eslintignore',
      gitattributes: '.gitattributes',
      'codecov.yml': '.codecov.yml',
      'travis.yml': '.travis.yml',

      // Licence & Open Source files
      'README.md': 'README.md',
      LICENSE: 'LICENSE',
      'LICENSE.md': 'LICENSE.md',
      'CONTRIBUTING.md': 'CONTRIBUTING.md',
      'GUIDELINES.md': 'GUIDELINES.md',
      'github/**/*': '.github',

      // NPM package file
      'package.json': 'package.json',

      // flow definitions files
      'flow-typed/**/*': 'flow-typed',

      // storybook settings
      'storybook/**/*': '.storybook',

      // source files
      [`src/component/${this.props.componentType}.js`]:
        `src/${this.props.componentName}/index.js`,
      'src/component/index.spec.js': `src/${this.props.componentName}/index.spec.js`,
      'src/component/index.stories.js': `src/${this.props.componentName}/index.stories.js`,
      'src/component/index.theme.js': `src/${this.props.componentName}/index.theme.js`,
      'src/index.js': 'src/index.js',

      // global test files
      'tests/**/*': 'tests',
    };

    forEach(templates, (dest, src) => {
      this.fs.copyTpl(
        this.templatePath(src),
        this.destinationPath(dest),
        {
          componentName: this.props.componentName,
          componentType: this.props.componentType,
          packageName: this.props.packageName,
          repoOwner: this.props.repo.owner,
          repoPath: this.props.repo.repo,
          repoName: this.props.repo.name,
          repoUrl: this.props.repoUrl,
          description: this.props.description,
          currentYear: new Date().getFullYear(),
        });
    });
  }

  install() {
    this.installDependencies({ bower: false });
  }
};
