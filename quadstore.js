
const { Quadstore } = require('quadstore');
const { DataFactory } = require('rdf-data-factory');
const { newEngine } = require('quadstore-comunica');
const leveljs = require('level-js');

module.exports = {
  leveljs,      // Browser-compatible backend
  Quadstore,    // Actual Quadstore class from the quadstore package
  DataFactory,  // Reference implementation of the RDF/JS DataFactory interface
  newEngine,    // Factory function for Comunica ActorInitSparql instances
};
