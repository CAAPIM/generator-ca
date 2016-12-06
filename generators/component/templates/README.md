## <%= componentName %>

[![Build Status](https://travis-ci.org/shanedasilva/<%= packageName %>.svg?branch=master)](https://travis-ci.org/shanedasilva/<%= packageName %>)
[![codecov](https://codecov.io/gh/shanedasilva/<%= packageName %>/branch/master/graph/badge.svg)](https://codecov.io/gh/shanedasilva/<%= packageName %>)
[![dependencies](https://david-dm.org/shanedasilva/<%= packageName %>.svg)](https://david-dm.org/shanedasilva/<%= packageName %>)
[![devDependency Status](https://david-dm.org/shanedasilva/<%= packageName %>/dev-status.svg)](https://david-dm.org/shanedasilva/<%= packageName %>#info=devDependencies)

Explain what <%= componentName %> is and how it works.

### Live Playground

For examples of <%= componentName %> in action, go to [https://shanedasilva.github.io/<%= packageName %>](https://shanedasilva.github.io/<%= packageName %>/).

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
 
### Contributing

What is the process for contributing to this project?
