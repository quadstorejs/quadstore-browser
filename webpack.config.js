
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
};
