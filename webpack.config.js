
const path = require('path');

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
  resolve: {
    alias: {
      'stream': 'readable-stream',
    }
  },
  externals: [
    (context, request, callback) => {
      if (request.startsWith('_webpack_ignored_')) {
        return callback(null, 'commonjs2 ' + request);
      }
      callback();
    },
  ],
};
