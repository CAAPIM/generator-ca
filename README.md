# generator-ca
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

This generator can be used to assist with build projects that use React by scaffoling out common features and components.

## Features

* Built-in preview server with [React Storybook](https://github.com/kadirahq/react-storybook)
* Automagically lint your scripts
* Automagically wire up your Bower components with
* Unit Testing with [Jest](https://github.com/facebook/jest) and [Enzyme](https://github.com/airbnb/enzyme)

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

## Contributing

This project supports `commitizen`. You can use `npm run commit` to run the local instance of `commitizen` or `git cz` if you have it installed globally.

Alternatively, if you are simply using `git commit`, you must follow this format:
`git commit -m "<type>: <subject>"`
