
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
    fallback: {
      stream: require.resolve('readable-stream'),
      buffer: require.resolve('buffer'),
    },
  },
  plugins: [
    new webpack.ProvidePlugin({
      // process: 'process/browser.js',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]
};
