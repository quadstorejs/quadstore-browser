
# Quadstore webpack bundle

This project serves as a reference for developers looking to use [quadstore][0]
in web browsers.

The `webpack.config.js` file contains the reference configuration for Webpack
**4.x** that is used to produce the `quadstore.bundle.js` file.
  
The `quadstore.bundle.js` file is a UMD module suitable for use in browsers
that contains [quadstore][0], the [level-js][1] backend and the
[reference implementation][3] of the RDF/JS DataFactory interface. It can be
rebuilt at any point by running `npm run build`.

The `index.html` file loads both the `quadstore.bundle.js` file and the 
`main.js` file, the latter of which runs a few queries through a store and
writes the results via `console.log()`.

Issues should be reported in quadstore's [issue tracker][2].

[0]: https://github.com/beautifulinteractions/node-quadstore
[1]: https://www.npmjs.com/package/level-js
[2]: https://github.com/beautifulinteractions/node-quadstore/issues
[3]: https://www.npmjs.com/package/@rdfjs/data-model
