
const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'dist', 'bundle.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'module',
    chunkFormat: false,
  },
  experiments: {
    outputModule: true,
  },
  target: 'web',
  optimization: {
    minimize: true,
    moduleIds: 'named',
    usedExports: true,
    concatenateModules: false
  },
  resolve: {
    alias: {
      buffer: path.resolve(__dirname, 'require-empty.js'),
      events: path.resolve(__dirname, 'node_modules', 'events'),
    },
  },
  plugins: []
};
