## <%= repoName %>

[![Build Status](https://travis-ci.org/<%= repoPath %>.svg?branch=master)](https://travis-ci.org/<%= repoPath %>)
[![codecov](https://codecov.io/gh/<%= repoPath %>/branch/master/graph/badge.svg)](https://codecov.io/gh/<%= repoPath %>)
[![dependencies](https://david-dm.org/<%= repoPath %>.svg)](https://david-dm.org/<%= repoPath %>)
[![devDependency Status](https://david-dm.org/<%= repoPath %>/dev-status.svg)](https://david-dm.org/<%= repoPath %>#info=devDependencies)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

### Overview

<%= description %>

### Installation

The easiest way to use <%= repoName %> is to install it from NPM:

```javascript
npm i -S <%= packageName %>
```

At this point you can import `<%= packageName %>`` into your application:

```js
import <%= componentName %> from '<%= packageName %>';
```

### Live Playground

For examples of <%= repoName %> in action, go to [https://<%= repoOwner %>.github.io/<%= repoName %>](https://<%= repoOwner %>.github.io/<%= repoName %>/).

OR

To run the demos locally:
- The this repository
- Run `npm install`
- Run `npm run storybook`
- Visit [http://localhost:9001](http://localhost:9001)

### Development

|`npm run <script>`|Description|
|------------------|-----------|
|`lint`| Runs eslint against all `.js` files in `./src` folder.|
|`flow`| Runs [Flow](https://github.com/facebook/flow) against all `.js` files in `./src` and does static type checking.|
|`flow:coverage`| Runs `flow` command and generates a coverage|
|`flow:copy`| Copies `src` files to `lib` folder, renaming them to `*.js.flow`.|
|`test`| Runs [Jest](https://github.com/facebook/jest) against all `./src/*.spec.js` files.|
|`test:watch`| Runs long running `test` command.|
|`test:coverage`| Runs `test` command and generates coverage report.|
|`storybook`| Serves the [React Storybook](https://github.com/kadirahq/react-storybook) app at `localhost:9001`. Looks for all`./src/*.stories.js` files.|
|`storybook:build`| Generates a static Storybook app in the `./build` folder.|
|`storybook:deploy`| Generates a static Storybook app and deploys to Github pages.|
|`start`| Alias for `npm run storybook`.|
|`compile`| Babel proccesses `src` files and moves to `lib` folder.|
|`build`| Compile `src` files and generate Flow interfaces.|
|`commit`| Uses [commitizen](https://github.com/commitizen/cz-cli) to do proper tagged commits.|

## How Can You Contribute
Your contributions are welcome and much appreciated. To learn more, see the [Contribution Guidelines](CONTRIBUTING.md).

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`

## License
Copyright (c) <%= currentYear %> CA. All rights reserved.
This software may be modified and distributed under the terms of the MIT license. To learn more, see the [License](LICENSE.md)
