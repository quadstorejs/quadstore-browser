
const { Quadstore } = require('quadstore');
const dataFactory = require('@rdfjs/data-model');
const leveljs = require('level-js');

module.exports = {
  leveljs,      // Browser-compatible backend
  Quadstore,    // Actual Quadstore class from the quadstore package
  dataFactory,  // Reference implementation of the RDF/JS DataFactory interface
};
