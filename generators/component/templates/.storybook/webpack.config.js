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
    path: path.join(__dirname, '/../dist'),
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
