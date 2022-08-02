
const { Quadstore } = require('quadstore');
const { DataFactory } = require('rdf-data-factory');
const { Engine } = require('quadstore-comunica');
const { BrowserLevel } = require('browser-level');

module.exports = {
  BrowserLevel,
  Quadstore,    // Actual Quadstore class from the quadstore package
  DataFactory,  // Reference implementation of the RDF/JS DataFactory interface
  Engine,       // Class that wraps the Comunica query engine
};
