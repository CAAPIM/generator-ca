/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

const path = require('path');
const helpers = require('yeoman-test');
const spawn = require('child_process').spawn;
const chalk = require('chalk');
const mkdirp = require('mkdirp');
const rimraf = require('rimraf');

const buildDir = path.join(__dirname, 'build');
const testComponentName = 'TestComponent';
const testComponentFolder = `CA-UI-${testComponentName}`;
let start = new Date();

const success = (testDesc) => () => {
  const end = new Date() - start;
  console.log(chalk.grey(`    ${chalk.green('✓')} ${testDesc} (${end}ms)`));
  start = new Date();
};

const fail = (testDesc) => (err) => {
  const end = new Date() - start;
  console.log(chalk.grey(`    ${chalk.red('✕')} ${testDesc} (${end}ms)\n`));
  console.error(err.error);
  process.exit(err.code);
};

const test = (testDesc, testFunc) => () =>
  testFunc()
    .then(success(testDesc))
    .catch(fail(testDesc));

const setup = () => new Promise((resolve, reject) => {
  console.log('  generator-ca:component');

  mkdirp(buildDir, (error) => {
    if (error) {
      reject({ code: 1, error });
      return;
    }
    resolve();
  });
});

const cleanComponent = () => new Promise((resolve, reject) => {
  rimraf(path.join(buildDir, testComponentFolder), (error) => {
    if (error) {
      reject({ code: 1, error });
      return;
    }
    resolve();
  });
});

const copyComponentFolder = dir => new Promise((resolve, reject) => {
  const copy = spawn('cp', ['-R',
    path.join(dir, testComponentFolder),
    buildDir,
  ]);

  let copyErr = '';
  copy.stderr.on('data', (data) => {
    copyErr += data.toString();
  });

  copy.on('exit', (copyCode) => {
    if (copyCode) {
      reject({ code: copyCode, error: copyErr });
      return;
    }
    resolve();
  });
});

const runNpmInstall = () => new Promise((resolve, reject) => {
  const cp = spawn('npm', ['install', '--no-progress'], {
    cwd: path.join(buildDir, testComponentFolder),
  });

  let error = '';
  cp.stderr.on('data', (data) => {
    error += data.toString();
  });

  cp.on('exit', (code) => {
    if (code) {
      reject({ code, error });
      return;
    }
    resolve();
  });
});

const runNpmScript = (script) => () => new Promise((resolve, reject) => {
  const cp = spawn('npm', ['run', script], {
    cwd: path.join(buildDir, testComponentFolder),
  });

  let error = '';
  cp.stdout.on('data', (data) => {
    error += data.toString();
  });

  cp.on('exit', (code) => {
    if (code) {
      reject({ code, error });
      return;
    }
    resolve();
  });
});

const runYeomanGenerator = () =>
  helpers.run(path.join(__dirname, '../../generators/component')).withPrompts({
    componentName: testComponentName,
    description: 'Some description',
  });

const generateComponent = () =>
  cleanComponent()
    .then(runYeomanGenerator)
    .then(copyComponentFolder);


setup()
  .then(test('should generate component', generateComponent))
  .then(test('should install NPM dependencies', runNpmInstall))
  .then(test('should pass lint checks', runNpmScript('lint')))
  .then(test('should pass flow checks', runNpmScript('flow')))
  .then(test('should pass tests', runNpmScript('test:coverage')))
  .then(test('should compile storybook', runNpmScript('storybook:build')))
  .then(test('should build', runNpmScript('build')))
;
