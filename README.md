# generator-ca
[![Build Status](https://travis-ci.org/CAAPIM/generator-ca.svg?branch=master)](https://travis-ci.org/CAAPIM/generator-ca)
[![codecov](https://codecov.io/gh/CAAPIM/generator-ca/branch/master/graph/badge.svg)](https://codecov.io/gh/CAAPIM/generator-ca)
[![dependencies](https://david-dm.org/CAAPIM/generator-ca.svg)](https://david-dm.org/CAAPIM/generator-ca)
[![devDependency Status](https://david-dm.org/CAAPIM/generator-ca/dev-status.svg)](https://david-dm.org/CAAPIM/generator-ca#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## Overview

[Yeoman](http://yeoman.io/) generator to saffold common JavaScript modules and components. This library is meant to be used to generate all CA projects and components.

## Features

* Automagically lint your scripts with [ESlint](http://eslint.org/)
* Automagically type check your scripts with [Flow](https://flowtype.org/)
* Unit Testing with [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme)
* Built-in preview server with [React Storybook](https://github.com/kadirahq/react-storybook) for react components

## Installation

First, install [Yeoman](http://yeoman.io) and generator-ca using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-ca
```

Then generate your new component:

```bash
yo ca:component
```

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](https://github.com/CAAPIM/react-themer/blob/master/CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2017 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](https://github.com/CAAPIM/react-themer/blob/master/LICENSE.md)
