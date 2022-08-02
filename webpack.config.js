
const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, 'quadstore.js'),
  output: {
    path: __dirname,
    filename: 'quadstore.bundle.js',
    library: 'quadstore',
    libraryTarget: 'umd',
  },
  target: 'web',
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      buffer: path.resolve(__dirname, 'empty.js'),
    },
  },
  plugins: []
};
