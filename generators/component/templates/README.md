## <%= componentName %>

[![Build Status](https://travis-ci.org/CAAPIM/<%= packageName %>.svg?branch=master)](https://travis-ci.org/CAAPIM/<%= packageName %>)
[![codecov](https://codecov.io/gh/CAAPIM/<%= packageName %>/branch/master/graph/badge.svg)](https://codecov.io/gh/CAAPIM/<%= packageName %>)
[![dependencies](https://david-dm.org/CAAPIM/<%= packageName %>.svg)](https://david-dm.org/CAAPIM/<%= packageName %>)
[![devDependency Status](https://david-dm.org/CAAPIM/<%= packageName %>/dev-status.svg)](https://david-dm.org/CAAPIM/<%= packageName %>#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Overview

Explain what <%= componentName %> is and how it works.

### Live Playground

For examples of <%= componentName %> in action, go to [https://CAAPIM.github.io/<%= packageName %>](https://CAAPIM.github.io/<%= packageName %>/).

OR

To run the demos locally:
- The this repository
- Run `npm install`
- Run `npm run storybook`
- Visit `http://localhost:9001`

### Installation

The easiest way to use <%= componentName %> is to install it from NPM

```javascript
npm install <%= packageName %> --save
```

At this point you can import <%= packageName %> into your application:

```js
import <%= componentName %> from '<%= packageName %>';
```

### Development

|`npm run <script>`|Description|
|------------------|-----------|
|`lint`| Runs eslint against all `.js` files in `./src` folder.|
|`flow`| Runs [Flow](https://github.com/facebook/flow) against all `.js` files in `./src` and does static type checking.|
|`flow:coverage`| Runs `flow` command and generates a coverage
|`test`|Runs [Jest](https://github.com/facebook/jest) against all `./src/*.spec.js` files.|
|`test:watch`|Runs long running `test` command.|
|`test:coverage`|Runs `test` command and generates coverage report.|
|`storybook`|Serves the [React Storybook](https://github.com/kadirahq/react-storybook) app at `localhost:9001`. Looks for all`./src/*.stories.js` files.|
|`storybook:test`|Finds `./src/*.stories.js` files and creates Jest snapshot tests for all stories.|
|`storybook:deploy`|Generates a static Storybook app and deploys to Github pages.|
|`deploy`|Runs `lint`, `test`, `storybook:test` commands.|
|`build`|Babel proccesses `src` files and moves to `dist` folder.|
|`commit`|Uses [commitizen](https://github.com/commitizen/cz-cli) to do proper tagged commits.|
|`release`|Uses [semantic-release](https://github.com/semantic-release/semantic-release) to trigger releases.|

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) 2016 CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](LICENSE.md)
