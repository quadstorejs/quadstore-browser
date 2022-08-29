
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'src', 'bundle.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'quadstore.bundle.js',
    libraryTarget: 'module',
    chunkFormat: false,
  },
  experiments: {
    outputModule: true,
  },
  target: 'web',
  optimization: {
    minimize: true,
  },
  resolve: {
    alias: {
      buffer: path.resolve(__dirname, 'require-empty.js'),
      events: path.resolve(__dirname, 'node_modules', 'events'),
    },
  },
  plugins: []
};
