/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

const path = require('path');
const webpack = require('webpack');

const config = {
  env: process.env.NODE_ENV,

  devtool: 'cheap-module-eval-source-map',

  context: __dirname,

  entry: [
    path.join(__dirname, '/../src/<%= componentName %>.js'),
  ],

  output: {
    path: path.join(__dirname, '/../lib'),
    filename: 'index.js',
  },

  resolve: {
    extensions: ['', '.js'],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
  ],

  module: {
    preLoaders: [{
      test: /\.js?$/,
      loaders: ['eslint'],
      exclude: /node_modules/,
      include: __dirname,
    }],

    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
    }],
  },
};

module.exports = config;
